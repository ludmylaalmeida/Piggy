import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

export default function BaseLayout({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node,
}
