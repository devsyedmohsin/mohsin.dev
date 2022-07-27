import '../sass/components/post.scss'

import Layout from "./layout";
import { Link } from 'gatsby';
import React from "react";

const PostLayout = ({ children, pageContext }) => {

    const { title, description } = pageContext.frontmatter

    return (
        <Layout title={title} description={description}>
            <div className="row">
                <div className="article">
                    {children}
                    <Link to='/posts'>&larr; back</Link>
                </div>
            </div>
        </Layout>
    )

}

export default PostLayout
