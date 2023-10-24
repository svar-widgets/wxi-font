module.exports = {
    name: "wx-icons",
    inputDir: "./icons",
    outputDir: "./dist",
    fontTypes: ["woff", "woff2"],
    normalize: true,
    assetTypes: ["css"],
    pathOptions: {
        css: "./dist/wx-icons.css",
    },
    fontsUrl : ".",
    prefix: "wxi"
};
