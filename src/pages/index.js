import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function index() {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Aaron, a full-stack developer living in beautiful Seattle.</h2>
      <p>
        Need a developer? <Link>Contact me.</Link>
      </p>
    </Layout>
  )
}
