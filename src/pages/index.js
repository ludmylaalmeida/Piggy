import HomeNavbar from "../components/homeNavbar"
import HomeHeader from "../components/homeHeader"
import Grid from "@material-ui/core/Grid"
import { Box } from "@material-ui/core"
import React from "react"
import { Container } from "@material-ui/core"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeNavbar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box mt={15}>
            <HomeHeader />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Container>
  )
}
