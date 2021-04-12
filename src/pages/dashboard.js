import React from "react"
import { AppBar, Toolbar, Box, Container, makeStyles } from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"
import Sidebar from "../components/sidebar"

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
      {/* <Sidebar /> */}
      <Box className={classes.insideContainer} mt={4}>
        <GroupSection />
      </Box>
    </Container>
  )
}
