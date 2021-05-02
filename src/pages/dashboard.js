import React from "react"
import {
  Box,
  Container,
  Hidden,
} from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"
import DashboardCreatePost from "../components/dashboardCreatePost"
import UserProfile from "../components/userProfile"

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
      <Hidden smDown>
        <Box mt={16} ml={16}>
          <UserProfile/>
          {/* <GroupSection /> */}
          {/* <DashboardCreatePost /> */}
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box mt={16}>
          {/* <GroupSection /> */}
          {/* <DashboardCreatePost /> */}
        </Box>
      </Hidden>
    </Container>
  )
}
