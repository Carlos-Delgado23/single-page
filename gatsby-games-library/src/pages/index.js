import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your new Gatsby Games.</h1>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

// export const query = graphql`

// `

export default IndexPage