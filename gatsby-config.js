/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
<<<<<<< HEAD
          include: /assets/ // See below to configure properly
        }
      }
=======
          include: /assets/, // See below to configure properly
        },
      },
>>>>>>> 1e0749cfa37544992b62cee0c3c44b2fad6ea8f2
    },
  ],
}
