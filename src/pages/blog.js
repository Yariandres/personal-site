import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter{
            path
            title
            date
            author
          }
        }
      }
    }    
  }
`
const BlogPage = ( { data } ) => (
  <Layout>
    <SEO title="Blog Page" />

    <section className="blog-page">
      <div className="margin-bottom-big">
          <h2 className="blog-page__heading">Latest Posts</h2>
      </div>

      {data.allMarkdownRemark.edges.map(post => (
        <div className="row">
          <div className="story">        
            <div key={post.node.id} className="story__text">

            <Link to={post.node.frontmatter.path}>
              <h3 className="margin-bottom-small heading-tertiary">{post.node.frontmatter.title}</h3>
            </Link>

              <small>Post by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>      
            </div>
            <hr className="margin-bottom-meduim"/>
            <div className="blog-page__btn">
                <Link className="btn-dark" to={post.node.frontmatter.path}> Read more</Link>
            </div>
          </div>
        </div>
      ))}

    </section>        
  </Layout>
)

export default BlogPage;
