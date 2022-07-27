import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';

const Seo = (props) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          title
          siteUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const url = props.siteUrl || defaults.siteUrl

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name='author' content='devsyedmohsin@gmail.com' />
      <link rel="canonical" href={url} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={'/meta_img.png'} />

      <meta name="twitter:card" content={'/meta_img.png'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url} />


      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Jost&family=Playfair+Display&display=swap" rel="stylesheet" />
    </Helmet>
  )

};

export default Seo