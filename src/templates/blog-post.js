import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout"

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`


export default function Template( { data } ) {
  const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>      
      <div className="post-page">
        <div className="row">      
          <h2 className="heading--secondary center-text margin-bottom-small">{post.frontmatter.title}</h2>

          <h4 className="heading-tertiary center-text ">Posted by: {post.frontmatter.author} on {post.frontmatter.date}</h4>
          <div className="paragraph margin-bottom-small" dangerouslySetInnerHTML={{ __html: post.html }}></div>

          <Link className="btn-dark" to="/blog">Go Back</Link>
        </div>
      </div>
    </Layout>
  )
}

