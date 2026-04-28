module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            layouts: "../_layouts",
            output: "docs"
        }
    };
};