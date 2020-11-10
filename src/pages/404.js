import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../Layouts/Layout"
import Head from "../Layouts/Head"
import { notFound404 } from "../mock/data"

const NotFound = () => {
  const { title, lang, description } = notFound404
  return (
    <Layout>
      <Head title={title} lang={lang} desc={description} />
      <div>
        <h1>{description}</h1>

        <Button variant="contained" color="primary" href="/">
          Head home
        </Button>
      </div>
    </Layout>
  )
}

export default NotFound
