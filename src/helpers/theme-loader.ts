import * as chroma from "chroma-js";
import { BASIC_DARK_THEME_TEMPLATE } from "./templates/basic-dark-theme";
import { BASIC_LIGHT_THEME_TEMPLATE } from "./templates/basic-light-theme";

export class ThemeLoader {

    private static readonly THEME_NAME_MATCHER = /%theme-name%/g;
    private static readonly PRIMARY_COLOR_MATCHER = /%primary-color-(\d+)%/g;
    private static readonly ACCENT_COLOR_MATCHER = /%accent-color-(\d+)%/g;
    private static readonly WARN_COLOR_MATCHER = /%warn-color-(\d+)%/g;

    public static loadCompiled(compiledThemeData: string): void {
        const element = document.createElement("style");
        element.type = "text/css";

        element.innerHTML = compiledThemeData;
        document.getElementsByTagName("head")[0].appendChild(element);
    }

    public static createBasic(name: string, primaryColor: string, accentColor: string, warnColor: string, isDark?: boolean): void {
        let themeData: string = isDark ? BASIC_DARK_THEME_TEMPLATE : BASIC_LIGHT_THEME_TEMPLATE;

        themeData = themeData.replace(this.THEME_NAME_MATCHER, name);
        themeData = themeData.replace(this.PRIMARY_COLOR_MATCHER, (_match, $1) => this.computeColor(primaryColor, Number.parseInt($1)));
        themeData = themeData.replace(this.ACCENT_COLOR_MATCHER, (_match, $1) => this.computeColor(accentColor, Number.parseInt($1)));
        themeData = themeData.replace(this.WARN_COLOR_MATCHER, (_match, $1) => this.computeColor(warnColor, Number.parseInt($1)));

        this.loadCompiled(themeData);
    }

    private static computeColor(baseColor: string, paletteOffset: number): string {
        if (paletteOffset <= 500) {
            return chroma(baseColor).brighten((500 - paletteOffset) / 1000).hex();
        } else {
            return chroma(baseColor).darken((paletteOffset - 500) / 1000).hex();
        }
    }
}