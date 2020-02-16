module.exports = {
  siteMetadata: {
    title: `Aurélien Toussaint`,
    description: `Web portfolio of Aurélien Toussaint`,
    author: `@neginoyami`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aurélien Toussaint`,
        short_name: `Aurélien Toussaint`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9F7AEA`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
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
