import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

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
            fields {
              slug
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
          const { slug } = post.node.fields

          return (
            <article key={i} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p className={blogStyles.date}>{date}</p>
                <p>{excerpt}</p>
              </Link>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}
