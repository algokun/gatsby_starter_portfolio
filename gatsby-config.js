module.exports = {
  siteMetadata: {
    title: `Mohan`,
    description: `A personal portfolio site built with GatsbyJS`,
    author: `mohan.tech`,
    footerLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/sree.dhannu"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mohan.houseStark"
      }
    ],
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/sree.dhannu"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mohan.houseStark"
      },
      {
        name: "Twitter",
        url: "https://www.twitter.com/_MrNullPointer"
      },
      {
        name: "Github",
        url: "https://www.github.com/mohanmonu777"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/mohanmonu777"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-personal-portfolio`,
        short_name: `mohan's portfolio`,
        start_url: `/`,
        background_color: `#616CAA`,
        theme_color: `#616CAA`,
        display: `minimal-ui`,
        icon: `src/images/code_logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-tech-blog-theme",
      options:{
        basePath: "/blog",
        contentPath: "content/blog",
      }
    }
  ]
};
