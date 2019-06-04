import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Head from "../components/Head"

export default function notFound() {
  return (
    <Layout>
      <Head title="Not Found" />
      <div>
        <h1>Uh oh...</h1>
        <h2>The page you are looking for seems to be missing... </h2>
        <p>
          <Link to="/">Go back to home?</Link>
        </p>
      </div>
    </Layout>
  )
}
