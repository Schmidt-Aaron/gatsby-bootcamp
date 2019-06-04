import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

export default function blog() {
  const contentful = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = contentful.allContentfulBlogPost.edges
  console.log(posts)

  return (
    <div>
      <Layout>
        <h1>Hello from the Blog</h1>
        {posts.map((post, i) => {
          const { title, slug, publishedDate } = post.node

          return (
            <article key={i} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p className={blogStyles.date}>{publishedDate}</p>
              </Link>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}
