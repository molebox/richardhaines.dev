let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'richardhaines.dev',
    intro: 'A software developer who specializes in Jamstack development.',
    description: 'I currently work as a frontend developer and scrum master for a network security company in the north of Sweden. Im a passionate coder who in my spare time loves to blog, create fun user experiences and explore new technologies. Im currently diving into serverless tech, Apollo and FaunaDB. I also ❤️ emoji!',
    siteUrl: 'https://richardhaines.dev',
  },
    plugins: [
        {
          resolve: 'gatsby-plugin-mdx',
          options: {
            defaultLayouts: {
              default: require.resolve('./src/templates/post-layout.js')
            },
            remarkPlugins: [
              require('remark-slug')
            ]
          }
        },
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
          path: 'memory',
          name: 'memory'
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
        path: `${__dirname}/src/assets/`,
        name: 'assets'
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
        path: `${__dirname}/memory/images/`,
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
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/components/site/copy-paste`,
            name: 'copy-paste',
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
              description: 'A software developer who specializes in Jamstack development. I currently work as a frontend developer and scrum master for a network security company in the north of Sweden. Im a passionate coder who in my spare time loves to blog, create fun user experiences and explore new technologies. Im currently diving into serverless tech, Apollo and FaunaDB. I also ❤️ emoji!',
              siteUrl: 'https://richardhaines.dev',
              social: {
                  twitter: 'studio_hungry'
              }
          }
      },
      {
        resolve: `gatsby-source-spotify`,
        options: {
          clientId: '5e5bc54d2e2641ffaca1770a2fc2c976',
          clientSecret: '98498f92d0b74bf0b9241b2905d30a1b',
          refreshToken: 'AQBmzW5xlA7cGn6GSzx0TGkglpYwGEknsF6wYFRP4c0MrD9ywtqIM72RWBuo1mHQKCqkXGeW2QnxwKfTG9XyWCEAWq_GK3_yfvMQpKPpSrvC4vg5kwFGIemXX1WXTG3Q9ek',
      
          fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
          fetchRecent: false, // optional. Set to false to disable fetching of your recently played tracks
          timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
        },
      },
      {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
            trackingId: process.env.GOOGLE_TRACKING_ID || 'none'
          }
      },
          'gatsby-plugin-anchor-links',
          '@pauliescanlon/gatsby-mdx-embed',
          'gatsby-transformer-sharp',
          'gatsby-plugin-sharp',
          'gatsby-plugin-emotion',
          'gatsby-plugin-twitter',
          'gatsby-plugin-theme-ui'

    ]
}