<<<<<<< HEAD
import HomeNavbar from "../components/homeNavbar"
import HomeImage from "../components/homePageMobile"
import React from "react"
import { Container, Grid, Hidden } from "@material-ui/core"
import { HomePageMobile } from "../components/homePageMobile"
=======
import HomeNavbar from "../components/homeNavbar";
import React from "react";
import { Container } from "@material-ui/core"
>>>>>>> bdc1fac03979249f78bf2234954621b6947aa94c

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
