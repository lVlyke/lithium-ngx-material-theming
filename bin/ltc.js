#!/usr/bin/env node
// @ts-check
"use strict";

const themeCompiler = require("../scripts/compile-theme");
const fs = require("fs");

(function main() {
    const compiledTheme = themeCompiler.compileFile(process.argv[2]);

    fs.writeFileSync(process.argv[3], compiledTheme, { encoding: "utf-8" });
})();
