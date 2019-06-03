import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }

            excerpt
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  // console.log(posts)

  return (
    <div>
      <Layout>
        <h1>Hello from the Blog</h1>
        {posts.map((post, i) => {
          const { title, date } = post.node.frontmatter
          const { excerpt } = post.node

          return (
            <div key={i}>
              <h2>{title}</h2>
              <p>Written on {date}</p>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </Layout>
    </div>
  )
}
