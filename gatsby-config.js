module.exports = {
  siteMetadata: {
    title: `The Blues Issue`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "The Blues Issue",
          short_name: "Blues Issue",
          start_url: "/",
          background_color: "#4A5C9C",
          theme_color: "#B20404",
          display: "minimal-ui",
          icon: "src/img/logo.jpg", // This path is relative to the root of the site.
        },
    },
    'gatsby-plugin-offline',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `gallery`,
            path: `${__dirname}/src/assets/archive/`,
        },
      },
  ],
};
