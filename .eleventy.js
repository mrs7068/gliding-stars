module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        pathPrefix: "/gliding-stars/",
        dir: {
            input: "content",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site"
        }
    };
};