module.exports = {
  siteMetadata: {
    title: `Aurélien Toussaint`,
    description: `Web portfolio of Aurélien Toussaint`,
    author: `@neginoyami`,
    siteUrl: `https://aurelientoussaint.me`,
    image: `/images/avatar.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://aurelientoussaint.me`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aurélien Toussaint`,
        short_name: `Aurélien Toussaint`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9F7AEA`,
        display: `minimal-ui`,
        icon: `src/images/avatar.jpg`
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-72062716-2`,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: [`mode-dark`],
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      }
    },
    `gatsby-plugin-offline`
  ]
};
