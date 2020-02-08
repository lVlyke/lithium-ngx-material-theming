import { ThemeLoader } from "./theme-loader";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PaletteOffset = (keyof ThemeGenerator.Palette) & number;

/**
 * @param name The name that will be used to reference the new theme.
 * @param templateData The CSS theme template that will be used to create the final theme data.
 * @param primaryPalette The primary color palette.
 * @param accentPalette The accent color palette.
 * @param warnPalette The warn color palette.
 */
export interface TemplateThemeCreationOptions {
    name: string;
    templateData: string;
    primaryPalette: ThemeGenerator.Palette;
    accentPalette: ThemeGenerator.Palette;
    warnPalette: ThemeGenerator.Palette;
    templateOptions?: Partial<ThemeTemplateOptions>;
}

export interface ThemeTemplateOptions {
    nameMatcher: string | RegExp;
    primaryColorMatcher: string | RegExp;
    accentColorMatcher: string | RegExp;
    warnColorMatcher: string | RegExp;
    primaryContrastColorMatcher: string | RegExp;
    accentContrastColorMatcher: string | RegExp;
    warnContrastColorMatcher: string | RegExp;
}

export namespace ThemeTemplateOptions {

    export const defaultValues: Readonly<ThemeTemplateOptions> = {
        nameMatcher: /%theme-name%/g,
        primaryColorMatcher: /#a0[0a](\d{3})/g,
        accentColorMatcher: /#b0[0a](\d{3})/g,
        warnColorMatcher: /#c0[0a](\d{3})/g,
        primaryContrastColorMatcher: /#ac[0a](\d{3})/g,
        accentContrastColorMatcher: /#bc[0a](\d{3})/g,
        warnContrastColorMatcher: /#cc[0a](\d{3})/g
    };
}

/**
 * @param isDark Whether or not the theme should be a dark theme. Defaults to `false`.
 * @see TemplateThemeCreationOptions
 */
export interface ThemeCreationOptions extends Omit<
    TemplateThemeCreationOptions,
    "templateData" | "templateOptions"
> {
    isDark?: boolean;
}


// @dynamic
export class ThemeGenerator {

    public static chromaImpl: any;

    /**
     * @description Creates a new theme from the given template theme CSS and theme palettes and loads it for use with the given name.
     * @param options The options to use to create the new theme.
     * @return The compiled theme CSS.
    */
    public static createFromTemplate(options: TemplateThemeCreationOptions): string {
        // Generate the theme data from the given template data:
        let themeData = options.templateData;
        let templateOptions = Object.assign({}, ThemeTemplateOptions.defaultValues, options.templateOptions || {});

        themeData = themeData.replace(templateOptions.nameMatcher, options.name);
        themeData = themeData.replace(templateOptions.primaryColorMatcher, (_match, $1) => options.primaryPalette[this.offset($1)]);
        themeData = themeData.replace(templateOptions.accentColorMatcher, (_match, $1) => options.accentPalette[this.offset($1)]);
        themeData = themeData.replace(templateOptions.warnColorMatcher, (_match, $1) => options.warnPalette[this.offset($1)]);

        themeData = themeData.replace(templateOptions.primaryContrastColorMatcher, (_match, $1) => options.primaryPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(templateOptions.accentContrastColorMatcher, (_match, $1) => options.accentPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(templateOptions.warnContrastColorMatcher, (_match, $1) => options.warnPalette.contrast[this.offset($1)]);

        const themeElement = ThemeLoader.loadCompiled(themeData);

        // Store the color info for external programmatic use
        themeElement.setAttribute("data-color-primary", options.primaryPalette[500]);
        themeElement.setAttribute("data-color-accent", options.accentPalette[500]);
        themeElement.setAttribute("data-color-warn", options.warnPalette[500]);

        return themeData;
    }

    /**
     * @description Creates a new theme from the given theme palettes and loads it for use with the given name.
     * @param options The options to use to create the new theme.
     * @return The compiled theme.
    */
    public static create(options: ThemeCreationOptions): string {
        return this.createFromTemplate({
            templateData: this.loadStandardThemeTemplate(options.isDark),
            ...options
        });
    }

    /**
     * @description Computes a Material color palette for the given `baseColor`.
     * @param baseColor The color that the palette will be based off of.
     * @requires chroma-js
     */
    public static createPalette(baseColor: string): ThemeGenerator.Palette {
        const basePalette = {
            50: this.paletteColor(baseColor, 50),
            100: this.paletteColor(baseColor, 100),
            200: this.paletteColor(baseColor, 200),
            300: this.paletteColor(baseColor, 300),
            400: this.paletteColor(baseColor, 400),
            500: this.paletteColor(baseColor, 500),
            600: this.paletteColor(baseColor, 600),
            700: this.paletteColor(baseColor, 700),
            800: this.paletteColor(baseColor, 800),
            900: this.paletteColor(baseColor, 900)
        };

        return Object.assign(basePalette, {
            contrast: {
                50: this.contrastColor(basePalette[50]),
                100: this.contrastColor(basePalette[100]),
                200: this.contrastColor(basePalette[200]),
                300: this.contrastColor(basePalette[300]),
                400: this.contrastColor(basePalette[400]),
                500: this.contrastColor(basePalette[500]),
                600: this.contrastColor(basePalette[600]),
                700: this.contrastColor(basePalette[700]),
                800: this.contrastColor(basePalette[800]),
                900: this.contrastColor(basePalette[900])
            }
        });
    }

    /**
     * @description Computes a color for a Material theme palette using `baseColor` and the given `paletteOffset`.
     * @param baseColor The base color.
     * @param paletteOffset The offset in the palette.
     * @return The new color to be used for the given palette offset.
     * @requires chroma-js
     */
    public static paletteColor(baseColor: string, paletteOffset: PaletteOffset): string {
        const chroma = this.resolveChroma();
        const graduation = 0.3;
        const offset = (paletteOffset < 500) ? (500 - paletteOffset) : (paletteOffset - 500);
        const graduatedOffset = 0.2 + (offset * 0.01 * graduation);

        // Darken or lighten the base color based on the palette offset number
        if (paletteOffset < 500) {
            return chroma(baseColor).brighten(graduatedOffset ** 2).hex();
        } else if (paletteOffset > 500) {
            return chroma(baseColor).darken(graduatedOffset ** 2).hex();
        } else {
            return baseColor;
        }
    }

    /**
     * @description Computes an appropriate contrast color (either black or white) that contrasts the given `color`.
     * @param color The color to be contrasted.
     * @return The contrast color.
     * @requires chroma-js
     */
    public static contrastColor(color: string): string {
        if (this.resolveChroma()(color).luminance() < 0.45) {
            return "white";
        } else {
            return "black";
        }
    }

    private static loadStandardThemeTemplate(isDark: boolean): string {
        return isDark ? this.resolveBasicDarkThemeTemplate() : this.resolveBasicLightThemeTemplate();
    }

    /** @description Compute the palette offset from an associated regex match. */
    private static offset(matcher: string): PaletteOffset {
        return Number.parseInt(matcher) as PaletteOffset;
    }

    private static resolveChroma(): any {
        if (this.chromaImpl) {
            return this.chromaImpl;
        }

        try {
            return require("chroma-js");
        } catch(_e) {
            // @ts-ignore
            if (typeof chroma !== "undefined") {
                // @ts-ignore
                return chroma;
            }

            throw new Error("[ThemeGenerator] 'chroma-js' is required to generate dynamic runtime themes.");
        }
    }

    private static resolveBasicLightThemeTemplate(): string {
        try {
            return require("@lithiumjs/ngx-material-theming-templates/standard-light-theme.json").data;
        } catch(_e) {
            throw new Error("[ThemeGenerator] '@lithiumjs/ngx-material-theming-templates' is required to generate dynamic runtime themes.");
        }
    }

    private static resolveBasicDarkThemeTemplate(): string {
        try {
            return require("@lithiumjs/ngx-material-theming-templates/standard-dark-theme.json").data;
        } catch(_e) {
            throw new Error("[ThemeGenerator] '@lithiumjs/ngx-material-theming-templates' is required to generate dynamic runtime themes.");
        }
    }
}

export namespace ThemeGenerator {

    export interface Palette {
        50: string,
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string,

        contrast: {
            50: string,
            100: string,
            200: string,
            300: string,
            400: string,
            500: string,
            600: string,
            700: string,
            800: string,
            900: string
        }
    }
}
