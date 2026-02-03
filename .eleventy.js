const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("style.css");

    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").sort((a, b) => {
            return b.date - a.date; 
        });
    });

    eleventyConfig.addFilter("datePL", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" })
            .setLocale("pl")
            .toFormat("d LLLL yyyy");
    });

    return {
        dir: {
            input: ".",        
            output: "_site",
            includes: "_includes"
        }
    };
};
