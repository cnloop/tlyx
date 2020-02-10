const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    pages: {
        index: {
            entry: resolve("src/views/index/main.js"),
            template: resolve("src/views/index/index.html")
        },
        about: {
            entry: resolve("src/views/about/main.js"),
            template: resolve("src/views/about/about.html")
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("_api", resolve("src/api"))
            .set("_views", resolve("src/views"))
            .set("_func", resolve("src/func"))
            .set("_native", resolve("src/native"))
            .set("@images", resolve("src/assets/images"))
            .set("@miGuan", resolve("src/assets/miGuan"))
            .set("_components", resolve("src/components"))
            .set("_mixins", resolve("src/mixins"));
    }
};
