module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/style.css": "style.css",
    "src/favicon.svg": "favicon.svg",
    "src/images": "images",
  });

  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));

  return {
    dir: { input: "src", output: "_site" },
    htmlTemplateEngine: "njk",
  };
};
