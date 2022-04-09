import { ThemeLoader } from "./theme-loader";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PaletteOffset = (keyof ThemeCreator.Palette) & number;

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

    /** @description Compute the palette offset from an associated regex match. */
    private static offset(matcher: string): PaletteOffset {
        return Number.parseInt(matcher) as PaletteOffset;
    }
}

export namespace ThemeCreator {

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
