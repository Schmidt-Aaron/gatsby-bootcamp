import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function Blog(props) {
  return (
    <Layout>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}
