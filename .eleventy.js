const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {

    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/img");
    config.addPassthroughCopy("src/js");

    config.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };

};