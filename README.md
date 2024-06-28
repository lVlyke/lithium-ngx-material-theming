# @lithiumjs/ngx-material-theming

Dynamic and customizable Angular Material theming made easy. Powered by [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular).

## Features

* **SCSS mixins** make creating themes easy.
* **Extend Material themes** with your own styles for your custom components and overrides.
* **Change themes at run-time** with the `ThemeContainer` directive.
* **Nested theme support** - Apply multiple themes independently to any part of your app.
* **Offline theme compilation** of SCSS themes using the provided `ltc` CLI tool.
* **Run-time theme creation** - True dynamic themes; Easily generate brand new themes at runtime.

## Getting started

* Check out the [quick start guide](/docs/quick-start.md).
* Take a look at the [example app](https://github.com/lVlyke/lithium-ngx-material-theming-example) and [live demo](https://lvlyke.github.io/lithium-ngx-material-theming-example/).

## Notice - Angular 18 Material 3 Update

v18 of Angular Material introduces official support for Material 3-based themes, with the old Material 2-based theme utilities being prefixed with `m2`. ngx-material-theming matches this behavior by prefixing all Material 2 theming utilities with `m2`.

ngx-material-theming does not currently support Material 3 theming.

## Other information

* [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular)