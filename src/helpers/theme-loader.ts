// @dynamic
export class ThemeLoader {

    private static readonly THEME_NAME_PARSER = /\[li-theme="([^\]\s]+)"\]/;

    /**
     * @description Loads the given compiled theme in for use.
     * @param compiledThemeData The pre-compiled theme data.
     * @param labelElement [Optional] If `true`, will attach a `data-theme-name` attribute to the `<style>` element set to the theme's name.
    */
    public static loadCompiled(compiledThemeData: string, labelElement?: boolean): HTMLElement {
        const element = document.createElement("style");
        element.type = "text/css";

        if (labelElement === undefined ? true : labelElement) {
            const nameParse = this.THEME_NAME_PARSER.exec(compiledThemeData);
            if (nameParse && nameParse.length > 1) {
                element.setAttribute("data-theme-name", "" + nameParse?.[1]);
            }
        }

        element.innerHTML = compiledThemeData;

        this.getHeadElement().appendChild(element);
        return element;
    }

    /**
     * @description Unloads the given compiled theme from the DOM.
     * @param name The name of the theme to unload.
    */
    public static unloadCompiled(name: string): void {
        const head = this.getHeadElement();

        head.querySelectorAll(`style[data-theme-name=${name}]`)
            .forEach(style => head.removeChild(style));
    }

    private static getHeadElement(): HTMLElement {
        const heads = document.getElementsByTagName("head");
        if (!heads || heads.length === 0) {
            const head = document.createElement("head");
            document.appendChild(head);
            return head;
        } else {
            return heads[0];
        }
    }
}
