#!/usr/bin/env node
// @ts-check

let sass;

try {
    sass = require("sass");
} catch (_e) {
    throw new Error("'sass' must be installed as a devDependency in order to use the Lithium theme compiler.");
}

const path = require("path");

const NODE_MODULES_IMPORT_REGEX = /^(@import\s*(?:url\()?\s*)(['"`])\@(.+)\2(\s*\)?\s*;?)$/gm;

const api = module.exports = {
    /** @return {Buffer} */
    compileData(/** @type {string} */ data, /** @type {Object} */ options) {
        const importers = options ? (options.importer || []) : [];

        // Replace any occurences of '@import "@dep"` with '@import "node_modules/@dep"`
        data = data.replace(NODE_MODULES_IMPORT_REGEX, "$1$2node_modules/@$3$2$4");

        //@ts-ignore
        const result = sass.renderSync({
            data,
            importer: [
                api.nodeImporter,
                ...importers
            ],
            ...(options || {})
        });

        if (result.css) {
            return result.css;
        } else {
            //@ts-ignore
            throw new Error(result.formatted);
        }
    },

    /** @return {Buffer} */
    compileFile(/** @type {string} */ file, /** @type {Object} */ options) {
        const includePaths = options ? (options.includePaths || []) : [];
        const importers = options ? (options.importer || []) : [];

        //@ts-ignore
        const result = sass.renderSync({
            file,
            outputStyle: "compressed",
            includePaths: [
                path.dirname(file),
                ...includePaths
            ],
            importer: [
                api.nodeImporter,
                ...importers
            ],
            ...(options || {})
        });

        if (result.css) {
            return result.css;
        } else {
            //@ts-ignore
            throw new Error(result.formatted);
        }
    },

    nodeImporter (/** @type {string} */ url, /** @type {string} */ prev) {
        // Replace all leading '@'s with 'node_modules'
        if (url.startsWith("@")) {
            return { file: url.replace(/^\@/g, "node_modules/@") };
        }

        return null;
    }
};
