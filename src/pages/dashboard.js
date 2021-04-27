import React from "react"
<<<<<<< HEAD
import {
  Box,
  Container,
  Hidden,
} from "@material-ui/core"
=======
import { Box, Container, makeStyles, Hidden } from "@material-ui/core"
>>>>>>> 1e0749cfa37544992b62cee0c3c44b2fad6ea8f2
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
