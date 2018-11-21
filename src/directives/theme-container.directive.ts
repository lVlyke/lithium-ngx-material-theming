import { Directive, HostBinding, Input } from "@angular/core";
import { StateEmitter, AotAware } from "@lithiumjs/angular";
import { Subject } from "rxjs";

@Directive({
    selector: "li-theme-container"
})
export class ThemeContainer extends AotAware {

    @Input("theme")
    @StateEmitter({ initialValue: "default" })
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