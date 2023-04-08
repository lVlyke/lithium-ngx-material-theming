import chroma from "chroma-js";
import lightThemeTemplate from "@lithiumjs/ngx-material-theming-templates/standard-light-theme.json";
import darkThemeTemplate from "@lithiumjs/ngx-material-theming-templates/standard-light-theme.json";
import { PaletteOffset, TemplateThemeCreationOptions, ThemeCreator } from "./theme-creator";

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

export class ThemeGenerator {

    /**
     * @see ThemeCreator.createFromTemplate
    */
     public static createFromTemplate(options: TemplateThemeCreationOptions): string {
        return ThemeCreator.createFromTemplate(options);
    }

    /**
     * @description Creates a new theme from the given theme palettes and loads it for use with the given name.
     * @param options The options to use to create the new theme.
     * @return The compiled theme.
    */
     public static create(options: ThemeCreationOptions): string {
        return this.createFromTemplate({
            templateData: this.loadStandardThemeTemplate(!!options.isDark),
            ...options
        });
    }

    /**
     * @description Computes a Material color palette for the given `baseColor`.
     * @param baseColor The color that the palette will be based off of.
     * @requires chroma-js
     */
    public static createPalette(baseColor: string): ThemeCreator.Palette {
        const basePalette = {
            "50": this.paletteColor(baseColor, "50"),
            "100": this.paletteColor(baseColor, "100"),
            "200": this.paletteColor(baseColor, "200"),
            "300": this.paletteColor(baseColor, "300"),
            "400": this.paletteColor(baseColor, "400"),
            "500": this.paletteColor(baseColor, "500"),
            "600": this.paletteColor(baseColor, "600"),
            "700": this.paletteColor(baseColor, "700"),
            "800": this.paletteColor(baseColor, "800"),
            "900": this.paletteColor(baseColor, "900"),
            "A100": this.paletteColor(baseColor, "A100"),
            "A200": this.paletteColor(baseColor, "A200"),
            "A400": this.paletteColor(baseColor, "A400"),
            "A700": this.paletteColor(baseColor, "A700"),
       };

        return Object.assign(basePalette, {
            contrast: {
                "50": this.contrastColor(basePalette["50"]),
                "100": this.contrastColor(basePalette["100"]),
                "200": this.contrastColor(basePalette["200"]),
                "300": this.contrastColor(basePalette["300"]),
                "400": this.contrastColor(basePalette["400"]),
                "500": this.contrastColor(basePalette["500"]),
                "600": this.contrastColor(basePalette["600"]),
                "700": this.contrastColor(basePalette["700"]),
                "800": this.contrastColor(basePalette["800"]),
                "900": this.contrastColor(basePalette["900"]),
                "A100": this.contrastColor(basePalette["A100"]),
                "A200": this.contrastColor(basePalette["A200"]),
                "A400": this.contrastColor(basePalette["A400"]),
                "A700": this.contrastColor(basePalette["A700"]),
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
        const graduation = 0.3;
        const aColor = paletteOffset.startsWith("A");
        const numericOffset = Number.parseInt(aColor ? paletteOffset.slice(1) : paletteOffset);
        const offset = (numericOffset < 500) ? (500 - numericOffset) : (numericOffset - 500);
        const graduatedOffset = 0.2 + (offset * 0.01 * graduation);

        // Darken or lighten the base color based on the palette offset number
        if (numericOffset < 500) {
            return chroma(baseColor).brighten(graduatedOffset ** 2).hex();
        } else if (numericOffset > 500) {
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
        if (chroma(color).luminance() < 0.45) {
            return "white";
        } else {
            return "black";
        }
    }

    private static loadStandardThemeTemplate(isDark: boolean): string {
        return isDark ? darkThemeTemplate.data : lightThemeTemplate.data;
    }
}
