import { BASIC_DARK_THEME_TEMPLATE } from "./templates/basic-dark-theme";
import { BASIC_LIGHT_THEME_TEMPLATE } from "./templates/basic-light-theme";
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
        primaryColorMatcher: /#a00(\d{3})/g,
        accentColorMatcher: /#b00(\d{3})/g,
        warnColorMatcher: /#c00(\d{3})/g,
        primaryContrastColorMatcher: /#ac0(\d{3})/g,
        accentContrastColorMatcher: /#bc0(\d{3})/g,
        warnContrastColorMatcher: /#cc0(\d{3})/g
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

    /**
     * @description Creates a new theme from the given template theme CSS and theme palettes and loads it for use with the given name.
     * @param options The options to use to create the new theme.
     * @return The compiled theme CSS.
    */
    public static createFromTemplate(options: TemplateThemeCreationOptions): string {
        let themeData = options.templateData;
        let templateOptions = Object.assign({}, ThemeTemplateOptions.defaultValues, options.templateOptions || {});

        themeData = themeData.replace(templateOptions.nameMatcher, name);
        themeData = themeData.replace(templateOptions.primaryColorMatcher, (_match, $1) => options.primaryPalette[this.offset($1)]);
        themeData = themeData.replace(templateOptions.accentColorMatcher, (_match, $1) => options.accentPalette[this.offset($1)]);
        themeData = themeData.replace(templateOptions.warnColorMatcher, (_match, $1) => options.warnPalette[this.offset($1)]);

        themeData = themeData.replace(templateOptions.primaryContrastColorMatcher, (_match, $1) => options.primaryPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(templateOptions.accentContrastColorMatcher, (_match, $1) => options.accentPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(templateOptions.warnContrastColorMatcher, (_match, $1) => options.warnPalette.contrast[this.offset($1)]);

        ThemeLoader.loadCompiled(themeData);
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
        try {
            const chroma = require("chroma-js");

            // Darken or lighten the base color based on the palette offset number
            if (paletteOffset <= 500) {
                return chroma(baseColor).brighten((500 - paletteOffset) / 1000).hex();
            } else {
                return chroma(baseColor).darken((paletteOffset - 500) / 1000).hex();
            }
        } catch(_e) {
            throw new Error("'chroma-js' is required to generate basic runtime themes.");
        }
    }

    /**
     * @description Computes an appropriate contrast color (either black or white) that contrasts the given `color`.
     * @param color The color to be contrasted.
     * @return The contrast color.
     * @requires chroma-js
     */
    public static contrastColor(color: string): string {
        try {
            const chroma = require("chroma-js");

            if (chroma(color).luminance() < 0.45) {
                return "white";
            } else {
                return "black";
            }
        } catch(_e) {
            throw new Error("'chroma-js' is required to generate dynamic runtime themes.");
        }
    }

    private static loadStandardThemeTemplate(isDark: boolean): string {
        return isDark ? BASIC_DARK_THEME_TEMPLATE : BASIC_LIGHT_THEME_TEMPLATE;
    }

    /** @description Compute the palette offset from an associated regex match. */
    private static offset(matcher: string): PaletteOffset {
        return Number.parseInt(matcher) as PaletteOffset;
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
