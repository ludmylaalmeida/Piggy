import React from "react"
import { AppBar, Toolbar, Box, Container, makeStyles } from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 2000,
  },
  insideContainer: {
    backgroundColor: "#FBFBFB",
  },
}))

export default function Dashboard() {
  const classes = makeStyles()
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
      <Box className={classes.insideContainer} mt={16}>
        <GroupSection />
      </Box>
    </Container>
  )
}
