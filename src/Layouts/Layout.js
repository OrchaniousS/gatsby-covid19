import React from "react"
import { Container } from "@material-ui/core"
import { Typography } from "@material-ui/core"

import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <Container fixed={true} maxWidth="lg">
      <Typography variant="body1" gutterBottom className={styles.layout}>
        {children}
      </Typography>
    </Container>
  )
}

export default Layout
