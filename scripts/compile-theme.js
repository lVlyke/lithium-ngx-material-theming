#!/usr/bin/env node
// @ts-check
"use strict";

const sass = require("node-sass");
const fs = require("fs");

const NODE_MODULES_IMPORT_REGEX = /^(@import\s*(?:url\()?\s*)(['"`])~(.+)\2(\s*\)?\s*;?)$/gm;

/** @return {string} */
exports.compile = function (/** @type {string} */ data) {
    // Replace any occurences of '@import "~dep"` with '@import "node_modules/dep"`
    data = data.replace(NODE_MODULES_IMPORT_REGEX, "$1$2node_modules/$3$2$4");

    const result = sass.renderSync({ data });

    if (result.css) {
        return result.css;
    } else {
        throw new Error(result.formatted);
    }
};

/** @return {string} */
exports.compileFile = function (/** @type {string} */ filePath) {
    const data = fs.readFileSync(filePath, "utf-8");
    return exports.compile(data);
};