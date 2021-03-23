import HomeNavbar from "../components/homeNavbar"
import HomeImage from "../components/homeImage"
import React from "react"
import { Container, Grid, Hidden } from "@material-ui/core"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeNavbar />
      <Grid item xs={12} md={6}>
        <HomeImage />
      </Grid>
      <Hidden xsUp>

      </Hidden>
    </Container>
  )
}
