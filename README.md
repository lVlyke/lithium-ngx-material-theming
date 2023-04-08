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
* (Coming Soon) View the full API documentation.
* Take a look at the [example app](https://github.com/lVlyke/lithium-ngx-material-theming-example) and [live demo](https://lvlyke.github.io/lithium-ngx-material-theming-example/).

## Angular 15 Material MDC Update

v15 of Angular Material introduces MDC-based components, with the old pre-v15 components being marked as "legacy". ngx-material-theming matches this behavior and exposes theming support for MDC-based components by default, with associated "legacy" mixins for pre-v15 components. If you are using legacy Angular Material components in your project, make sure to update your project to use the "legacy" versions of the ngx-material-theming mixins.

## Other information

* [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular)