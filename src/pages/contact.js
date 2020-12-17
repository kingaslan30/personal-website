import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://app.us7.list-manage.com/subscribe/post?u=6158fad09bcb57c3ca73cfc8c&amp;id=8dba29128a" method="post">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="MMERGE3" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="EMAIL" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="MMERGE4" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="MMERGE5" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`