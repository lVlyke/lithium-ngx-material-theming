import * as chroma from "chroma-js";
import { BASIC_DARK_THEME_TEMPLATE } from "./templates/basic-dark-theme";
import { BASIC_LIGHT_THEME_TEMPLATE } from "./templates/basic-light-theme";

export type PaletteOffset = (keyof ThemeLoader.Palette) & number;

export class ThemeLoader {

    private static readonly THEME_NAME_MATCHER = /%theme-name%/g;
    private static readonly PRIMARY_COLOR_MATCHER = /%primary-color-(\d+)%/g;
    private static readonly ACCENT_COLOR_MATCHER = /%accent-color-(\d+)%/g;
    private static readonly WARN_COLOR_MATCHER = /%warn-color-(\d+)%/g;
    private static readonly PRIMARY_FONT_COLOR_MATCHER = /%primary-font-color-(\d+)%/g;
    private static readonly ACCENT_FONT_COLOR_MATCHER = /%accent-font-color-(\d+)%/g;
    private static readonly WARN_FONT_COLOR_MATCHER = /%warn-font-color-(\d+)%/g;

    /**
     * @description Loads the given compiled theme in for use.
     * @param compiledThemeData The pre-compiled theme data.
    */
    public static loadCompiled(compiledThemeData: string): void {
        const element = document.createElement("style");
        element.type = "text/css";

        element.innerHTML = compiledThemeData;
        document.getElementsByTagName("head")[0].appendChild(element);
    }

    /**
     * @description Creates a new theme from the given palettes and loads it for use with the
     * given name.
     * @param name The name that will be used to reference the new theme.
     * @param primaryPalette The primary color palette.
     * @param accentPalette The accent color palette.
     * @param warnPalette The warn color palette.
     * @param isDark Whether or not the theme should be a dark theme. Defaults to `false`.
     * @return The compiled theme.
    */
    public static create(
        name: string,
        primaryPalette: ThemeLoader.Palette,
        accentPalette: ThemeLoader.Palette,
        warnPalette: ThemeLoader.Palette,
        isDark?: boolean
    ): string {
        let themeData: string = isDark ? BASIC_DARK_THEME_TEMPLATE : BASIC_LIGHT_THEME_TEMPLATE;

        themeData = themeData.replace(this.THEME_NAME_MATCHER, name);
        themeData = themeData.replace(this.PRIMARY_COLOR_MATCHER, (_match, $1) => primaryPalette[this.offset($1)]);
        themeData = themeData.replace(this.ACCENT_COLOR_MATCHER, (_match, $1) => accentPalette[this.offset($1)]);
        themeData = themeData.replace(this.WARN_COLOR_MATCHER, (_match, $1) => warnPalette[this.offset($1)]);

        themeData = themeData.replace(this.PRIMARY_FONT_COLOR_MATCHER, (_match, $1) => primaryPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(this.ACCENT_FONT_COLOR_MATCHER, (_match, $1) => accentPalette.contrast[this.offset($1)]);
        themeData = themeData.replace(this.WARN_FONT_COLOR_MATCHER, (_match, $1) => warnPalette.contrast[this.offset($1)]);

        this.loadCompiled(themeData);
        return themeData;
    }

    /**
     * @description Creates a new theme from the given base colors and loads it for use with the
     * given name.
     * @param name The name that will be used to reference the new theme.
     * @param primaryColor The color that will be used as the base color for the primary palette.
     * @param accentColor The color that will be used as the base color for the accent palette.
     * @param warnColor The color that will be used as the base color for the warn palette.
     * @param isDark Whether or not the theme should be a dark theme. Defaults to `false`.
     * @return The compiled theme.
    */
    public static createBasic(
        name: string,
        primaryColor: string,
        accentColor: string,
        warnColor: string,
        isDark?: boolean
    ): string {
        return this.create(name,
            this.computePalette(primaryColor),
            this.computePalette(accentColor),
            this.computePalette(warnColor),
            isDark
        );
    }

    /**
     * @description Creates a new random theme and loads it for use with the given name.
     * @param name The name that will be used to reference the new theme.
     * @param isDark Whether or not the theme should be a dark theme. If not 
     * specified, a light or dark theme will be choosen at random.
     * @return The compiled theme.
    */
    public static createRandom(name: string, isDark?: boolean): string {
        return this.createBasic(name,
            chroma.random().hex(),
            chroma.random().hex(),
            chroma.random().hex(),
            isDark === undefined ? Math.random() >= 0.5 : isDark
        );
    }

    /** @description Computes a palette for the given base color. */
    private static computePalette(baseColor: string): ThemeLoader.Palette {
        const basePalette = {
            50: this.computePaletteColor(baseColor, 50),
            100: this.computePaletteColor(baseColor, 100),
            200: this.computePaletteColor(baseColor, 200),
            300: this.computePaletteColor(baseColor, 300),
            400: this.computePaletteColor(baseColor, 400),
            500: this.computePaletteColor(baseColor, 500),
            600: this.computePaletteColor(baseColor, 600),
            700: this.computePaletteColor(baseColor, 700),
            800: this.computePaletteColor(baseColor, 800),
            900: this.computePaletteColor(baseColor, 900)
        };

        return Object.assign(basePalette, {
            contrast: {
                50: this.computeFontColor(basePalette[50]),
                100: this.computeFontColor(basePalette[100]),
                200: this.computeFontColor(basePalette[200]),
                300: this.computeFontColor(basePalette[300]),
                400: this.computeFontColor(basePalette[400]),
                500: this.computeFontColor(basePalette[500]),
                600: this.computeFontColor(basePalette[600]),
                700: this.computeFontColor(basePalette[700]),
                800: this.computeFontColor(basePalette[800]),
                900: this.computeFontColor(basePalette[900])
            }
        });
    }

    /** @description Computes a color for a Material font palette using `baseColor` and the given `paletteOffset`. */
    private static computePaletteColor(baseColor: string, paletteOffset: PaletteOffset): string {
        // Darken or lighten the base color based on the palette offset number
        if (paletteOffset <= 500) {
            return chroma(baseColor).brighten((500 - paletteOffset) / 1000).hex();
        } else {
            return chroma(baseColor).darken((paletteOffset - 500) / 1000).hex();
        }
    }

    /** @description Computes an appropriate font color (either black or white) that contrasts the given color. */
    private static computeFontColor(color: string): string {
        if (chroma(color).luminance() < 0.45) {
            return "white";
        } else {
            return "black";
        }
    }

    /** @description Compute the palette offset from an associated regex match. */
    private static offset(matcher: string): PaletteOffset {
        return Number.parseInt(matcher) as PaletteOffset;
    }
}

export namespace ThemeLoader {

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
