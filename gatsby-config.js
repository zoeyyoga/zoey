/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `조이요가 스튜디오`,
    description: `프라이빗한 공간에서 온전히 나의 몸과 마음을 그리고 호흡을 바라보는 시간`,
    author: `@zoeyyoga`,
    siteUrl: `https://zoeyyoga.com/`,
    image: `/og-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favi-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
