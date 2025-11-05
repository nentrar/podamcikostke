module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").sort((a, b) => {
            return b.date - a.date; 
        });
    });
    
    return {
        dir: {
            input: ".",        
            output: "_site",
            includes: "_includes"
        }
    };
};
