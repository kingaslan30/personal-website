import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";
import Pdf from '../../static/assets/resume.pdf';

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div class="profile-section">
          <img class="profile-photo" src="/assets/profile_photo.png"></img>
            <div class="bio">
                <p>I spent 2 years at SocialWithin, now a premium tier performance marketing agency, where I consulted with top digital brands like Ritual, Comrad, EighteenB, and William Murray Golf to enhance their post-click experience. I have worked across conversion optimization, marketing, UX, Shopify development, digital analytics, and user research to help clients solve their most pressing advertising conversion obstacles.</p>
                <p>Before making the transition to product management and marketing I studied electrical engineering and was a software developer. Coding satisfied my thirst to break down complex ideas into simple features. This is where I began to learn and appreciate UI/UX. </p>
                <div class="deets">
                    <div>Download my <a href = {Pdf} target="_blank">resume</a></div> 
                    <div>Say hello: <a href = "mailto:arsalann91@gmail.com">arsalann91@gmail.com</a></div>
                    <div class="socials">
                      <a href="https://www.linkedin.com/in/arsalan-nasir-9815a557/" target="_blank"><img class="icon" src="/assets/linkedin_icon.png"></img></a>
                      <a href="http://github.com/kingaslan30" target="_blank"><img class="icon" src="/assets/github_icon.png"></img></a>
                    </div>
                </div>
            </div>
      </div>
    </Layout>
  )
}

export default notFound