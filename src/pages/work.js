import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const WorkPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    
    return (
        <Layout>
          <Helmet>
            <title>Work — {site.siteMetadata.title}</title>
            <meta name="description" content={"Work page of " + site.siteMetadata.description} />
          </Helmet>
          <div className="grids">
            {Posts}
          </div>
        </Layout>
      )
    }
    
export default WorkPage
export const pageQuery = graphql`
    query WorkPageQuery {
    site {
        siteMetadata {
        title
        description
        }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
        node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            }
        }
        }
    }
    }
`
    