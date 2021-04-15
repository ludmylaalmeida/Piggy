import React from "react"
import { AppBar, Toolbar, Box, Container, makeStyles, useTheme, Hidden } from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 2000,
  },
}))

export default function Dashboard() {
  const classes = makeStyles()
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
      <Hidden smDown >
      <Box mt={16} ml={16}>
        <GroupSection/>
      </Box>
      </Hidden>
      <Hidden smUp >
      <Box mt={16}>
        <GroupSection/>
      </Box>
      </Hidden>

    </Container>
  )
}
