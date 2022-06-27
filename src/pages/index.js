import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import Card from "../components/card"
import * as React from 'react';
import Categoryfilter from "../components/categoryfilter"
import Background from "../components/background"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const counts = data.allMarkdownRemark.totalCount
  const backImg = data.file.childImageSharp.gatsbyImageData
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} category='all'>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Nav/>
      <Background data={backImg}/>
      <Categoryfilter loca="모든 글" tot={counts} categories={data.allMarkdownRemark.group}/>
      <Seo title="All posts" />
      <ol className="post-list" style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Card key={post.fields.slug} post={post} title={title}/>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "background.jpg"}) {
      childImageSharp {
          gatsbyImageData
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 50)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          thumbnail{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
      }
      totalCount
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
