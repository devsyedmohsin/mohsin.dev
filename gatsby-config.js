module.exports = {
  siteMetadata: {
    title: `✨ Home | Syed Mohsin - frontend developer & Interface designer`,
    siteUrl: `https://www.mohsin.dev`,
    description: 'The personal Web site of Syed Mohsin — frontend developer & Interface designer',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'posts',
        path:`${__dirname}/src/pages/posts`
      }
    },
    // {
    //   resolve:'gatsby-plugin-page-creator',
    //   options:{
    //     path:`${__dirname}/src/pages/posts`
    //   }
    // },
    {
      resolve:'gatsby-plugin-mdx',
      options:{
        defaultLayouts:{
          posts: require.resolve('./src/components/post-layout.js')
        }
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
