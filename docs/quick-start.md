# Quick start guide

## Installation

This project depends on [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular). Install both with NPM or Yarn:

```bash
npm install @lithiumjs/angular @lithiumjs/ngx-material-theming
```

[Chroma.js](https://github.com/gka/chroma.js/) is an optional dependency and is required only if you plan on generating Material color palettes at run-time.

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

If you aren't already using custom Angular Material theming, add the following to your root SCSS file (usually ```styles.scss```):

```scss
@import "~@angular/material/theming";

// Only include mat-core once in your app
@include mat-core();
```

## Create your first theme

Now it's time to create your application's first theme. Create a new SCSS file called ```default-theme.scss``` with the following content:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

@include app-theme("default",
    mat-palette($mat-blue),
    mat-palette($mat-pink),
    mat-palette($mat-red)
);
```

After creating this file, be sure to import it in your root SCSS file after the ```mat-core``` definition.

## Using theme containers

After creating and importing your new theme, you now need to add at least one `ThemeContainer` to your application in order to use it.

Add a `<li-theme-container>` to your `AppComponent`'s template (or whichever component you want the theme to apply to):

```html
<!-- theme="default" is optional as it is the default value -->
<li-theme-container theme="default">
    <!-- Your component's existing content goes here -->
</li-theme-container>
```

With that, you should now see the theme we just defined being applied to your app.

## Adding a second theme

Now, let's add a second theme. Create a new SCSS file called ```dark-theme.scss``` with the following content:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

@include app-theme("dark",
    mat-palette($mat-green),
    mat-palette($mat-blue),
    mat-palette($mat-red),
    true
);
```

Now, after importing the new theme file in your root SCSS file, change the `<li-theme-container>` to use the new theme:

```html
<li-theme-container theme="dark">
```

Your app should now be using the dark theme.

## Changing the theme at run-time

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

## Creating a new theme at run-time

Up until now we've only applied themes we created ahead of time. Now let's apply a theme that we create while the app is running. First, generate a random theme by making the following call during your component's initialization:

```ts
import * as chroma from "chroma-js";
import { ThemeGenerator } from "@lithiumjs/ngx-material-theming";

@Component()
export class AppComponent {
  
  constructor() {
    // Creates a random theme called "random"
    ThemeGenerator.create({
        name: "random",
        primaryPalette: ThemeGenerator.createPalette(chroma.random().hex()),
        accentPalette: ThemeGenerator.createPalette(chroma.random().hex()),
        warnPalette: ThemeGenerator.createPalette(chroma.random().hex()),
        isDark: Math.random() > 0.5
    });
  }
}
```

Now, modify the `<li-theme-container>` definition from earlier:

```html
<li-theme-container theme="random">
```

Your app should now have a new random theme applied to it every time it loads.

## Using multiple theme containers

There is no restriction on how many `ThemeContainer`s your app can have or how they can be nested. This allows you to simultaneously apply different themes to your app: 

```html
<!-- Content in this container will have the default theme applied -->
<li-theme-container>
    <div class="mat-app-background">
        <span>Viewing with default theme.</span>

        <!-- Content in this container will have the dark theme applied instead -->
        <li-theme-container theme="dark">
            <div class="mat-app-background">
                <span>Viewing with dark theme.</span>
            </div>
        </li-theme-container>
    </div>
</li-theme-container>
```

## Defining Material theme extensions

You can define extensions to your Material themes directly in the theme definition. Let's go back to the first theme we set up earlier:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

@include app-theme("default",
    mat-palette($mat-blue),
    mat-palette($mat-pink),
    mat-palette($mat-red)
);
```

To extend this theme, we can simply declare our theme extensions directly inside the theme definition body:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";

$default-primary: mat-palette($mat-blue);
$default-accent: mat-palette($mat-pink);
$default-warn: mat-palette($mat-red);

@include app-theme("default",
    $default-primary,
    $default-accent,
    $default-warn
) {
    foo-component {
        background-color: mat-color($default-primary);
    }
}
```

Though it isn't required, it is recommended that you split up your theme extensions by component into seperate files as mixins, and then include the mixins within your theme definition, i.e.:

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";
@import "theme_exts/foo-component";

$default-primary: mat-palette($mat-blue);
$default-accent: mat-palette($mat-pink);
$default-warn: mat-palette($mat-red);

@include app-theme("default",
    $default-primary,
    $default-accent,
    $default-warn
) {
    @include theme-ext-foo-component($default-primary, $default-accent, $default-warn);
}
```

## Using Material theme extensions at run-time

While the previous example works well for compile-time SCSS themes, we can also use our theme extensions for run-time theme creation.

### Create a theme template

We need to create a _theme template_ with our extensions. Think of a theme template as a blueprint that can be used to create themes at run-time.

First, create a new file called ```theme-template.scss``` with the following content (make sure you do not import it anywhere):

```scss
@import "~@angular/material/theming";
@import "~@lithiumjs/ngx-material-theming/styles/theme";
@import "theme_exts/foo-component";

$template-primary: mat-palette($template-theme-primary);
$template-accent: mat-palette($template-theme-accent);
$template-warn: mat-palette($template-theme-warn);

@include app-theme(
    $template-theme-name,
    $template-primary,
    $template-accent,
    $template-warn
) {
    @include theme-ext-foo-component($template-primary, $template-accent, $template-warn);
}
```

This is our template theme definition. It is simply a normal theme definition that uses special variables provided by the library that it can use to create new themes at run-time.

### Compile the theme template

Since this file is to be used at run-time instead of compile-time, we don't import it into the app. Instead, we use the provided ```ltc``` CLI tool to compile the theme into a CSS file that can then be used at run-time for theme creation. In the following example, we'll assume your app has an assets directory at ```src/assets```:

```bash
ltc ./src/styles/theme-template.scss ./src/assets/theme-template.css
```

Note: Depending on your ```PATH``` settings, you may have to use the fully qualified path for ```ltc```: ```./node_modules/.bin/ltc```.

If compiled successfully, you will see a new file called ```theme-template.css``` in your assets directory. Note: This file doesn't have to be checked into source control, but it must included with your application's assets when running.

### Use the theme template at run-time

Now that we have a compiled theme template, we can use it at run-time to generate dynamic themes that include our theme extensions. We must first load the template file. This can be done many ways, but the canonical Angular way would be to use ```HttpClient``` to load the file. After loading the template file, we can use ```ThemeGenerator.createFromTemplate``` to create a new theme:

```ts
import * as chroma from "chroma-js";
import { HttpClient } from "@angular/common/http";
import { ThemeGenerator } from "@lithiumjs/ngx-material-theming";

@Component()
export class AppComponent {
  
    constructor(http: HttpClient) {
        http.get("/assets/theme-template.css", { responseType: "text" }).subscribe((templateData) => {
            // This generates a new randomized theme named "random" that will have our theme extensions applied
            ThemeGenerator.createFromTemplate({
                name: "random",
                templateData,
                primaryPalette: ThemeGenerator.createPalette(chroma.random().hex()),
                accentPalette: ThemeGenerator.createPalette(chroma.random().hex()),
                warnPalette: ThemeGenerator.createPalette(chroma.random().hex())
            });
        });
    }
}
```

Now, any theme container that applies the ```random``` theme will have a new random run-time theme that includes our custom theme extensions!

## Further reading

(Coming Soon) See the API documentation.
