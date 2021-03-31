import HomeNavbar from "../components/homeNavbar"
import HomeImage from "../components/homePageMobile"
import React from "react"
import { Box, Container, Grid, Hidden } from "@material-ui/core"
import { HomePageMobile } from "../components/homePageMobile"
import HomeHeader from "../components/homeHeader"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeNavbar />
      <Box mt={10}>
        <HomeHeader />
      </Box>
    </Container>
  )
}
