module.exports = {
  siteMetadata: {
    siteName: 'richardhaines.dev',
    description: 'Hello Im Rich Haines. Im a software developer who specializes in JAMstack development. I currently work as a frontend developer for a network security company in the north of Sweden.',
    techStack: 'In my spare time i like to build websites and themes with Gatsby. Im proficient in JavaScript and React. These are 3 of my projects: ',
    siteUrl: 'https://richardhaines.dev',
  },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Muli',
                'Open Sans',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: 'resumedata',
              name: 'resumedata'
            },
        },
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
          'gatsby-transformer-sharp',
          'gatsby-plugin-sharp',
          'gatsby-plugin-emotion',
          'gatsby-plugin-mdx',
          'gatsby-plugin-theme-ui'

    ]
}