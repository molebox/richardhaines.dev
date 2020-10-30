const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-layout-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\templates\\post-layout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\pages\\blog.js"))),
  "component---src-pages-copy-paste-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\pages\\copy-paste.js"))),
  "component---src-pages-gatsby-themes-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\pages\\gatsby-themes.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\pages\\index.js"))),
  "component---src-pages-iyh-4-aowwb-xty-7-nm-js": hot(preferDefault(require("D:\\HUNGRYBEARSTUDIO\\portfolio\\src\\pages\\iyh4aowwbXTY7NM.js")))
}

