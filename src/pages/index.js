import HomeNavbar from "../components/homeNavbar"
import HomeImage from "../components/homePageMobile"
import React from "react"
import { Container, Grid, Hidden } from "@material-ui/core"
import { HomePageMobile } from "../components/homePageMobile"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeNavbar />
      <Grid item xs={12} md={6}>
        <HomeImage />
      </Grid>
      <Hidden xsUp>
        <HomePageMobile/>
      </Hidden>
    </Container>
  )
}
