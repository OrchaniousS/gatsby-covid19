import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title, lang, desc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || "en"} />
        <meta name="description" content={desc} />
      </Helmet>
    </>
  )
}

export default Head
