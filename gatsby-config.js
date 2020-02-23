module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Nunito',
                'Open Sans',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: 'cvdata',
              name: 'cvdata'
            },
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
              component: require.resolve('./src/layouts/index.js'),
            },
        },
          'gatsby-plugin-emotion'
    ]
}