import { Directive, HostBinding, Input, Optional, SkipSelf, ChangeDetectorRef } from "@angular/core";
import { AutoPush, StateEmitter, AotAware, OnInit, OnDestroy } from "@lithiumjs/angular";
import { Subject, combineLatest, Observable } from "rxjs";
import { filter, mergeMapTo, take, skip, tap } from "rxjs/operators"; 
import { OverlayContainer } from "@angular/cdk/overlay";

export const DEFAULT_THEME_NAME = "default";

@Directive({
    selector: "li-theme-container"
})
@AutoPush()
export class ThemeContainer extends AotAware {

    @OnInit()
    private readonly onInit$: Observable<void>;

    @OnDestroy()
    private readonly onDestroy$: Observable<void>;

    @Input("theme")
    @StateEmitter({ initialValue: DEFAULT_THEME_NAME })
    public readonly theme$: Subject<string>;
    @HostBinding("attr.theme")
    public readonly theme: string;

    /** @deprecated `disabled` has been deprecated in favor of the `active` input parameter. */
    @Input("disabled")
    @StateEmitter({ initialValue: false, writeOnly: true })
    public readonly disabled$: Subject<boolean>;

    @Input("active")
    @StateEmitter({ initialValue: true })
    public readonly active$: Subject<boolean>;
    @HostBinding("attr.active")
    public readonly active: boolean;

    @Input("manageOverlay")
    @StateEmitter({ writeOnly: true })
    public readonly manageOverlay$: Subject<boolean>;

    constructor(
        overlayContainer: OverlayContainer,
        @SkipSelf() _cdRef: ChangeDetectorRef,
        @SkipSelf() @Optional() parentThemeContainer: ThemeContainer
    ) {
        super();

        // Manage the overlay automatically if this is the root theme container and `manageOverlay` hasn't been defined
        this.onInit$
            .pipe(mergeMapTo(this.manageOverlay$))
            .pipe(take(1))
            .pipe(filter(manageOverlay => manageOverlay === undefined))
            .subscribe(() => this.manageOverlay$.next(!parentThemeContainer && !overlayContainer.getContainerElement().getAttribute("theme")));

        // Remove the `theme` overlay attribute if this container is being destroyed and is still managing it
        this.onDestroy$
            .pipe(mergeMapTo(combineLatest(this.manageOverlay$, this.active$)))
            .pipe(take(1))
            .pipe(filter(([manage, active]) => manage && active))
            .subscribe(() => overlayContainer.getContainerElement().removeAttribute("theme"));

        /** @deprecated */
        this.disabled$.pipe(
            skip(1),
            tap(() => console.warn("Parameter `disabled` on `<li-theme-container>` has been deprecated and replaced with `active`."))
        ).subscribe(disabled => this.active$.next(!disabled));

        // Update the overlay if the state changes and we're managing the overlay
        combineLatest(this.active$, this.theme$, this.manageOverlay$)
            .pipe(filter(([, , manageOverlay]) => manageOverlay))
            .subscribe(([active, theme]) => {
                const overlay = overlayContainer.getContainerElement();
                if (active) {
                    overlay.setAttribute("theme", theme);
                } else {
                    overlay.removeAttribute("theme");
                }
            });
    }
}