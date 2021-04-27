import React from "react"
import {
  Box,
  Container,
  Hidden,
} from "@material-ui/core"
import DashboardNavbar from "../components/dashboardNavbar"
import GroupSection from "../components/groupSection"

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
      <Hidden smDown>
        <Box mt={16} ml={16}>
          <GroupSection />
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box mt={16}>
          <GroupSection />
        </Box>
      </Hidden>
    </Container>
  )
}
