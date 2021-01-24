module.exports = {
  siteMetadata: {
    title: 'Sulton | Personal Portfolio',
    siteUrl: `https://www.msultont.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-mailgo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sulton | Personal Portfolio`,
        short_name: `Sulton Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0195d8`,
        display: `standalone`,
        icon: 'src/images/web-title.png',
      },
    },
  ],
};
