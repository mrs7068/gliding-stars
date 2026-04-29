const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-link-attributes");

module.exports = function(eleventyConfig) {

    // Markdown with external link handling
    const md = markdownIt({ html: true }).use(markdownItAttrs, {
        matcher: (href) => href.startsWith("http"),
        attrs: {
            target: "_blank",
            rel: "noopener noreferrer"
        }
    });

    // Markdown filter (used in your layouts)
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content || "");
    });

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