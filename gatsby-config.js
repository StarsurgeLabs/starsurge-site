module.exports = {
  siteMetadata: {
    title: "Starsurge Labs",
    siteUrl: "https://starsurge.space",
    description: "Seu projeto web começa aqui!"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-emotion"
  ]
};
