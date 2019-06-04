import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

export default function index() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Aaron, a full-stack developer living in beautiful Seattle.</h2>
      <p>
        Need a developer? <Link>Contact me.</Link>
      </p>
    </Layout>
  )
}
