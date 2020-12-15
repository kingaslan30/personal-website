import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5"}}>
          <img></img>
        <p>Either you are in a wrong page or you have lost. Lets go back <Link to="/">home</Link> safely</p>
      </div>
    </Layout>
  )
}

export default notFound