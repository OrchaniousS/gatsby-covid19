import React from "react"

import App from "../components/App"
import Head from "../Layouts/Head"
import { headData } from "../mock/data"

export default () => {
  const { title, lang, description } = headData

  return (
    <>
      <Head title={title} lang={lang} desc={description} />
      <App />
    </>
  )
}
