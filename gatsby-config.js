/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const dotenv = require("dotenv")
dotenv.config()

const { githubApiQuery } = require("./github-api-query")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Blog",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GITHUB_PAT,
        graphQLQuery: githubApiQuery,
        variables: {
          query: "is:public user:pluralsight language:javascript",
          first: 50,
        },
      },
    },
  ],
}
