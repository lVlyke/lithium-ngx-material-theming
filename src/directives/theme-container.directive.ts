import { Directive, HostBinding, Input, Optional, SkipSelf } from "@angular/core";
import { StateEmitter, AotAware, OnInit } from "@lithiumjs/angular";
import { Subject, combineLatest, Observable } from "rxjs";
import { filter, mergeMapTo, take } from "rxjs/operators"; 
import { OverlayContainer } from "@angular/cdk/overlay";

export const DEFAULT_THEME_NAME = "default";

@Directive({
    selector: "li-theme-container"
})
export class ThemeContainer extends AotAware {

    @OnInit()
    private onInit$: Observable<void>;

    @Input("theme")
    @StateEmitter({ initialValue: DEFAULT_THEME_NAME })
    public readonly theme$: Subject<string>;

    @Input("disabled")
    @StateEmitter({ initialValue: false })
    public readonly disabled$: Subject<boolean>;

    @Input("manageOverlay")
    @StateEmitter()
    public readonly manageOverlay$: Subject<boolean>;

    @HostBinding("attr.theme")
    protected attrTheme: string;

    @HostBinding("attr.disabled")
    protected attrDisabled: boolean;

    constructor(
        overlayContainer: OverlayContainer,
        @SkipSelf() @Optional() parentThemeContainer: ThemeContainer
    ) {
        super();

        // Manage the overlay automatically if this is the root theme container and `manageOverlay` hasn't been defined
        this.onInit$
            .pipe(mergeMapTo(this.manageOverlay$))
            .pipe(take(1))
            .pipe(filter(manageOverlay => manageOverlay === undefined))
            .subscribe(() => this.manageOverlay$.next(!parentThemeContainer));

        // Update the `theme` and `disabled` attributes if the state changes
        this.theme$.subscribe(theme => this.attrTheme = theme);
        this.disabled$.subscribe(disabled => this.attrDisabled = disabled);

        // Update the overlay if the state changes and we're managing the overlay
        combineLatest(this.disabled$, this.theme$, this.manageOverlay$)
            .pipe(filter(([, , manageOverlay]) => manageOverlay))
            .subscribe(([disabled, theme]) => {
                const overlay = overlayContainer.getContainerElement();
                if (disabled) {
                    overlay.removeAttribute("theme");
                } else {
                    overlay.setAttribute("theme", theme);
                }
            });
    }
}