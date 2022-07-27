import '../../sass/components/posts.scss'

import * as React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout title={'📚 Blog | Syed Mohsin - frontend developer & Interface designer'} description={`Blog page for personal website of Syed Mohsin`}>

<div className="row">
      <main className='posts-container'>


        <h1 className="h1">Blog✨</h1>

        <div className="posts">

          {posts.map(post => <Link to={post.slug} className='post' key={post.id}>
              <h2 className="h2 post__title">{post.frontmatter.title}</h2>
              <small className='post__date'>{post.frontmatter.date}</small>
          </Link>)}

        </div>

      </main>
</div>

    </Layout>
  );
};

export default BlogPage;
