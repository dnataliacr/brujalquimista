module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "brujalquimista",
  },
  plugins: [`gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // Footnotes mode (default: true)
      footnotes: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [],
    },
  },],
};
