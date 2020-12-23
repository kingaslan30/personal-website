import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import MailchimpSubscribe from "react-mailchimp-subscribe"


const url = "https://app.us7.list-manage.com/subscribe/post?u=6158fad09bcb57c3ca73cfc8c&amp;id=8dba29128a";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name, subject, msg;
  const submit = () =>
    email &&
    subject &&
    msg &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
      SUBJECT: subject.value,
      MESSAGE: msg.value
    });

  return (
    <div className="two-grids -contact">
      <div className="post-thumbnail" style={{backgroundImage: `url('/assets/get_in_touch3.jpeg')`, marginBottom: 0}}>
        <h1 className="post-title">Get in Touch</h1>
        <p>Let me help you kick start your next project &rarr;</p>
      </div>
      <div className="form-container">
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <br></br>
        <div>
          <label htmlFor="w3lName">Name</label>
          <input type="text" name="MMERGE3" id="w3lName" ref={node => (name = node)}/>
        </div>
        <div>
          <label htmlFor="w3lSender">Email</label>
          <input type="email" name="EMAIL" id="w3lSender" ref={node => (email = node)}/>
        </div>
        <div>
          <label htmlFor="w3lSubject">Subject</label>
          <input type="text" name="MMERGE4" id="w3lSubject" ref={node => (subject = node)}/>
        </div>
        <div>
          <label htmlFor="w3lMessage">Message</label>
          <textarea name="MMERGE5" id="w3lMessage" ref={node => (msg = node)}></textarea>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <input type="submit" onClick ={submit} className="button -primary" style={{marginRight: 0}} />
        </div>
      </div>
    </div>
  );
};

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
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
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