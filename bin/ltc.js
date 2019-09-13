#!/usr/bin/env node
// @ts-check

const themeCompiler = require("@lithiumjs/ngx-material-theming/scripts/compile-theme");
const fs = require("fs");

(function main() {
    if (process.argv.length < 4) {
        console.info("ltc is a command line tool that compiles an input Angular Material theme SCSS file into a usable CSS file for use with @lithiumjs/ngx-material-theming.");
        console.info("Usage:");
        console.info("ltc \"path/to/input/theme.scss\" \"path/to/compiled/output.css\" [\"additional/include/path/1\" \"additional/include/path/2\" ...]");
        throw new Error("Unrecognized input.");
    }

    const includePaths = process.argv.slice(4);
    const compiledTheme = themeCompiler.compileFile(process.argv[2], { includePaths });

    fs.writeFileSync(process.argv[3], compiledTheme, { encoding: "utf-8" });
})();
