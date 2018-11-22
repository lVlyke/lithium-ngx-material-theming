import { Directive, HostBinding, Input } from "@angular/core";
import { StateEmitter, AotAware } from "@lithiumjs/angular";
import { Subject } from "rxjs";

export const DEFAULT_THEME_NAME = "default";

@Directive({
    selector: "li-theme-container"
})
export class ThemeContainer extends AotAware {

    @Input("theme")
    @StateEmitter({ initialValue: DEFAULT_THEME_NAME })
    public readonly theme$: Subject<string>;

    @Input("disabled")
    @StateEmitter({ initialValue: false })
    public readonly disabled$: Subject<boolean>;

    @HostBinding("attr.theme")
    protected attrTheme: string;

    @HostBinding("attr.disabled")
    protected attrDisabled: boolean;

    constructor() {
        super();

        this.theme$.subscribe(theme => this.attrTheme = theme);
        this.disabled$.subscribe(disabled => this.attrDisabled = disabled);
    }
}