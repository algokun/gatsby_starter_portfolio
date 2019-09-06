var plugins = [{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-personal-portfolio","short_name":"mohan's portfolio","start_url":"/","background_color":"#616CAA","theme_color":"#616CAA","display":"minimal-ui","icon":"src/images/code_logo.png"},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"G:/Gatsby/portfolio/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.1.20","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":["onRenderBody"]},{"resolve":"G:/Gatsby/portfolio/node_modules/gatsby-remark-autolink-headers","id":"df380aaa-460e-51a2-8830-e6712dc1f436","name":"gatsby-remark-autolink-headers","version":"2.1.9","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"nofollow noopener noreferrer"}},{"resolve":"gatsby-remark-images","options":{"maxWidth":830,"quality":90,"withWebp":true,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-autolink-headers","options":{"maintainCase":false}}]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Minimal Blog - Gatsby Theme","short_name":"MinimalBlog","description":"Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.","background_color":"#FFF","theme_color":"#616CAA","display":"standalone","icon":"src/favicon.png"},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('G:/Gatsby/portfolio/node_modules/gatsby-tech-blog-theme/gatsby-ssr'),
      options: {"plugins":[],"basePath":"/blog","contentPath":"content/blog"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
