#!/usr/bin/env node
// @ts-check
"use strict";

const themeCompiler = require("../scripts/compile-theme");
const fs = require("fs");

(function main() {
    if (process.argv.length < 4) {
        console.log("ltc is a command line tool that compiles an input Angular Material theme SCSS file into a usable CSS file for use with @lithiumjs/ngx-material-theming.");
        throw new Error("ltc \"path/to/input/theme.scss\" \"path/to/compiled/output.css\"");
    }

    const compiledTheme = themeCompiler.compileFile(process.argv[2]);

    fs.writeFileSync(process.argv[3], compiledTheme, { encoding: "utf-8" });
})();
