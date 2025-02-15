import { Directive, Input, Optional, SkipSelf, ChangeDetectorRef, forwardRef, Inject } from "@angular/core";
import { AutoPush, OnInit, OnDestroy, createDirectiveState, stateTokenFor, DirectiveStateRef } from "@lithiumjs/angular";
import { combineLatest, Observable } from "rxjs";
import { filter } from "rxjs/operators"; 
import { OverlayContainer } from "@angular/cdk/overlay";

export const DEFAULT_THEME_NAME = "default";

const STATE_PROVIDER = createDirectiveState(forwardRef(() => ThemeContainer));

@Directive({
    standalone: false,
    selector: "li-theme-container",
    providers: [STATE_PROVIDER],
    host: {
        '[attr.li-theme]': 'theme',
        '[attr.active]': 'active'
    }
})
export class ThemeContainer {

    public readonly theme$ = this.stateRef.get("theme");
    public readonly active$ = this.stateRef.get("active");
    public readonly manageOverlay$ = this.stateRef.get("manageOverlay");

    @OnInit()
    private readonly onInit$!: Observable<void>;

    @OnDestroy()
    private readonly onDestroy$!: Observable<void>;

    @Input()
    public theme = DEFAULT_THEME_NAME;

    @Input()
    public active = true;

    @Input()
    public manageOverlay = true;

    constructor(
        overlayContainer: OverlayContainer,
        cdRef: ChangeDetectorRef,
        @SkipSelf() @Optional() parentThemeContainer: ThemeContainer,
        @Inject(stateTokenFor(STATE_PROVIDER)) private readonly stateRef: DirectiveStateRef<ThemeContainer>
    ) {
        let wasManagingOverlay = false;

        AutoPush.enable(this, cdRef);

        // Manage the overlay automatically if this is the root theme container and `manageOverlay` hasn't been defined
        this.onInit$.pipe(
            filter(() => this.manageOverlay === undefined)
        ).subscribe(() => this.manageOverlay = !parentThemeContainer && !overlayContainer.getContainerElement().getAttribute("li-theme"));

        // Remove the `theme` overlay attribute if this container is being destroyed and is still managing it
        this.onDestroy$.pipe(
            filter(() => this.manageOverlay && this.active)
        ).subscribe(() => overlayContainer.getContainerElement().removeAttribute("li-theme"));

        // Update the overlay if the state changes and we're managing the overlay
        combineLatest(stateRef.getAll("active", "theme", "manageOverlay")).subscribe(([active, theme, manageOverlay]) => {
            const overlay = overlayContainer.getContainerElement();
            if (manageOverlay && active) {
                overlay.setAttribute("li-theme", theme);
                wasManagingOverlay = true;
            } else if (wasManagingOverlay) {
                overlay.removeAttribute("li-theme");
                wasManagingOverlay = false;
            }
        });
    }
}