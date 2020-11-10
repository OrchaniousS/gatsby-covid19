module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID-19 TRACKER`,
        short_name: `COVID-19TRACKER`,
        start_url: `/`,
        background_color: `#ffff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
  ],
}
