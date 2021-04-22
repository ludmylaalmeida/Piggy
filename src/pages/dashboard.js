import React from "react"
import { Box, Container, makeStyles, Hidden } from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"
import DashboardCreatePost from "../components/dashboardCreatePost"

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
      <Hidden smDown>
        <Box mt={16} ml={16}>
          {/* <GroupSection /> */}
          <DashboardCreatePost />
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box mt={16}>
          {/* <GroupSection /> */}
          <DashboardCreatePost />
        </Box>
      </Hidden>
    </Container>
  )
}
