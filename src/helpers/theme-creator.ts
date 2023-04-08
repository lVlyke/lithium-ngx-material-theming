import { ThemeLoader } from "./theme-loader";

export type PaletteOffset = keyof ThemeCreator.PaletteBase;

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
    primaryPalette: ThemeCreator.Palette;
    accentPalette: ThemeCreator.Palette;
    warnPalette: ThemeCreator.Palette;
    templateOptions?: Partial<ThemeTemplateOptions>;
}

export interface ThemeTemplateOptions {
    nameMatcher: string | RegExp;
    primaryHexMatcher: string | RegExp;
    primaryRgbaMatcher: string | RegExp;
    accentHexMatcher: string | RegExp;
    accentRgbaMatcher: string | RegExp;
    warnHexMatcher: string | RegExp;
    warnRgbaMatcher: string | RegExp;
    primaryContrastHexMatcher: string | RegExp;
    primaryContrastRgbaMatcher: string | RegExp;
    accentContrastHexMatcher: string | RegExp;
    accentContrastRgbaMatcher: string | RegExp;
    warnContrastHexMatcher: string | RegExp;
    warnContrastRgbaMatcher: string | RegExp;
}

export namespace ThemeTemplateOptions {

    export const defaultValues: Readonly<ThemeTemplateOptions> = {
        nameMatcher: /%theme-name%/g,
        primaryHexMatcher: /#a099(\d{2})/g,
        primaryRgbaMatcher: /rgba\s?\(\s?160\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g,
        accentHexMatcher: /#b099(\d{2})/g,
        accentRgbaMatcher: /rgba\s?\(\s?176\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g,
        warnHexMatcher: /#c099(\d{2})/g,
        warnRgbaMatcher: /rgba\s?\(\s?192\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g,
        primaryContrastHexMatcher: /#ac99(\d{2})/g,
        primaryContrastRgbaMatcher: /rgba\s?\(\s?172\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g,
        accentContrastHexMatcher: /#bc99(\d{2})/g,
        accentContrastRgbaMatcher: /rgba\s?\(\s?188\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g,
        warnContrastHexMatcher: /#cc99(\d{2})/g,
        warnContrastRgbaMatcher: /rgba\s?\(\s?204\s?,\s?153\s?,\s?(\d+)\s?,\s?([\d.]+)\s?\)/g
    };
}

export class ThemeCreator {
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

        themeData = this.substituteThemeHex(themeData, templateOptions.primaryHexMatcher, options.primaryPalette);
        themeData = this.substituteThemeHex(themeData, templateOptions.accentHexMatcher, options.accentPalette);
        themeData = this.substituteThemeHex(themeData, templateOptions.warnHexMatcher, options.warnPalette);

        themeData = this.substituteThemeRgba(themeData, templateOptions.primaryRgbaMatcher, options.primaryPalette);
        themeData = this.substituteThemeRgba(themeData, templateOptions.accentRgbaMatcher, options.accentPalette);
        themeData = this.substituteThemeRgba(themeData, templateOptions.warnRgbaMatcher, options.warnPalette);

        themeData = this.substituteThemeHex(themeData, templateOptions.primaryContrastHexMatcher, options.primaryPalette.contrast);
        themeData = this.substituteThemeHex(themeData, templateOptions.accentContrastHexMatcher, options.accentPalette.contrast);
        themeData = this.substituteThemeHex(themeData, templateOptions.warnContrastHexMatcher, options.warnPalette.contrast);

        themeData = this.substituteThemeRgba(themeData, templateOptions.primaryContrastRgbaMatcher, options.primaryPalette.contrast);
        themeData = this.substituteThemeRgba(themeData, templateOptions.accentContrastRgbaMatcher, options.accentPalette.contrast);
        themeData = this.substituteThemeRgba(themeData, templateOptions.warnContrastRgbaMatcher, options.warnPalette.contrast);

        const themeElement = ThemeLoader.loadCompiled(themeData);

        // Store the color info for external programmatic use
        themeElement.setAttribute("data-color-primary", options.primaryPalette[500]);
        themeElement.setAttribute("data-color-accent", options.accentPalette[500]);
        themeElement.setAttribute("data-color-warn", options.warnPalette[500]);

        return themeData;
    }

    private static substituteThemeHex(themeData: string, matcher: string | RegExp, palette: ThemeCreator.PaletteBase): string {
        return themeData.replace(matcher, (_match, $1) => palette[this.hexOffset($1)]);
    }

    private static substituteThemeRgba(themeData: string, matcher: string | RegExp, palette: ThemeCreator.PaletteBase): string {
        return themeData.replace(matcher, (_match, $1, $2) => {
            return `rgba(${palette[this.rgbaOffset($1)]},${this.rgbaAlpha($2)})`;
        });
    }

    /** @description Compute the palette offset from an associated hex color regex match. */
    private static hexOffset(match: string): PaletteOffset {
        match = match.toLowerCase();
        return String(Number.parseInt(`${match}${match.startsWith("a") ? "00" : "0"}`)) as PaletteOffset;
    }

    /** @description Compute the palette offset from an associated rgba color regex match. */
    private static rgbaOffset(match: string): PaletteOffset {
        const decOffset = Number.parseInt(match);

        return this.hexOffset(decOffset.toString(16));
    }

    /** @description Compute the alpha channel from an associated rgba alpha regex match. */
    private static rgbaAlpha(match: string): number {
        return Number.parseFloat(match);
    }
}

export namespace ThemeCreator {

    export interface PaletteBase {
        "50": string,
        "100": string,
        "200": string,
        "300": string,
        "400": string,
        "500": string,
        "600": string,
        "700": string,
        "800": string,
        "900": string,
        "A100": string,
        "A200": string,
        "A400": string,
        "A700": string
    }

    export interface Palette extends PaletteBase {
        contrast: PaletteBase;
    }
}
