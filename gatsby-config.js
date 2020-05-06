let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'richardhaines.dev',
    intro: 'A software developer who specializes in JAMstack development.',
    description: 'I currently work as a frontend developer and scrum master for a network security company in the north of Sweden. Im a passionate coder who in my spare time loves to blog, create websites and themes with Gatsby and explore new technologies. Im currently diving into serverless tech, Apollo and FaunaDB. I also ❤️ emoji!',
    siteUrl: 'https://richardhaines.dev',
  },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Montserrat\:300,400,400i,700',
                'Open Sans\:300,400,400i,700',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                include: /assets/
              }
          }
        },
        'gatsby-transformer-json',
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: 'projects',
            name: 'projects'
          },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'gatsby-themes',
          name: 'gatsby-themes'
        },
    },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/projects/images/`,
          name: 'images'
        },
    },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'pages',
            path: `${__dirname}/src/pages/`
          }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/posts/`,
            name: 'posts',
          },
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
              component: require.resolve('./src/layouts/index.js'),
            },
        },
        {
          resolve: 'gatsby-theme-seo', 
          options: {
              title: 'richardhaines.dev',
              author: "Richard Haines",
              description: 'A software developer who specializes in JAMstack development. I currently work as a frontend developer and scrum master for a network security company in the north of Sweden. Im a passionate coder who in my spare time loves to blog, create websites and themes with Gatsby and explore new technologies. Im currently diving into serverless tech, Apollo and FaunaDB. I also ❤️ emoji!',
              siteUrl: 'https://richardhaines.dev',
              social: {
                  twitter: 'studio_hungry'
              }
          }
      },
      {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
            trackingId: process.env.GOOGLE_TRACKING_ID || 'none'
          }
      },
          '@pauliescanlon/gatsby-mdx-embed',
          'gatsby-transformer-sharp',
          'gatsby-plugin-sharp',
          'gatsby-plugin-emotion',
          'gatsby-plugin-mdx',
          'gatsby-plugin-twitter',
          'gatsby-plugin-theme-ui'

    ]
}