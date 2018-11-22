# Quick start guide

## Installation

This project depends on [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular). Install both from NPM:

```bash
npm install @lithiumjs/angular @lithiumjs/ngx-material-theming
```

[Chroma.js](https://github.com/gka/chroma.js/) is an optional dependency and is required only if you plan on creating basic or random themes at run-time.

After installing, make sure you import the project's module in your application:

```ts
import { NgxMaterialThemingModule } from "@lithiumjs/ngx-material-theming";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    NgxMaterialThemingModule // <---- Import this module into your application.
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Create your first theme

Now it's time to create your application's first theme. Create a new SCSS file with the following content:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

// Only include mat-core once in your app
@include mat-core();

@include app-theme("default",
    mat-palette($mat-blue),
    mat-palette($mat-pink),
    mat-palette($mat-red)
);
```

**Please note**: If you are defining multiple themes, `mat-core()` should only ever be included **once**.

## Using your new theme in a container

After creating and importing your new theme, you now need to add at least one `ThemeContainer` to your application in order to use it.

Add a `<li-theme-container>` to your `AppComponent`'s template (or whichever component you place the container in):

```html
<li-theme-container>
    <!-- Your component's existing content goes here -->
</li-theme-container>
```

Voila! You should now see your theme being applied in your app.

## Adding a second theme

Now, let's add a new theme. Create a new SCSS file with the following content:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

@include app-theme("secondary",
    mat-palette($mat-green),
    mat-palette($mat-blue),
    mat-palette($mat-red),
    true
);
```

Now, modify the `<li-theme-container>` you just added in the last step:

```html
<li-theme-container theme="secondary">
```

Your app should now be using your new secondary theme.

## Change the theme at run-time

To change the active theme at run-time, you can either bind directly to the `theme` attribute of `<li-theme-container>` or inject the `ThemeContainer` reference to change it programmatically as shown below: 

```ts
import { ThemeContainer } from "@lithiumjs/ngx-material-theming";

export class FooService {

    constructor(themeContainer: ThemeContainer) {
        themeContainer.theme$.next("secondary");
    }
}
```

If you are targeting a child `ThemeContainer`, you can use `@ViewChild()` to get a reference:

```ts
import { ThemeContainer } from "@lithiumjs/ngx-material-theming";

@Component()
export class FooComponent {

    @ViewChild(ThemeContainer)
    public themeContainer: ThemeContainer;

    constructor() {
        this.themeContainer.theme$.next("secondary");
    }
}
```

## Create a new theme at run-time

Up until now we've only applied themes we created ahead of time. Now let's apply a theme that we create while the app is running. First, generate a random theme by making the following call during your component's initialization:

```ts
import { ThemeLoader } from "@lithiumjs/ngx-material-theming";

@Component()
export class AppComponent {
  
  constructor() {
    // Creates a random theme called "random"
    ThemeLoader.createRandom("random");
  }
}
```

Now, modify the `<li-theme-container>` definition from earlier:

```html
<li-theme-container theme="random">
```

Your app should now have a new random theme applied to it every time it loads.

## Using multiple ThemeContainers

There is no restriction on how many `ThemeContainer`s your app can have or how they can be nested. This allows you to simultaneously apply different themes to your app: 

```html
<!-- Content in this container will have the default theme applied -->
<li-theme-container>
    <div class="mat-app-background">
        <span>Viewing with default theme.</span>

        <!-- Content in this container will have the secondary theme applied instead -->
        <li-theme-container theme="secondary">
            <div class="mat-app-background">
                <span>Viewing with secondary theme.</span>
            </div>
        </li-theme-container>
    </div>
</li-theme-container>
```

## Further reading

(Coming Soon) See the API documentation.