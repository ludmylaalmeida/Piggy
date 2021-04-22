import HomeNavbar from "../components/homeNavbar"
import React from "react"
import { Box, Container } from "@material-ui/core"
import HomeHeader from "../components/homeHeader"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeNavbar />
      <Box mt={4}>
        <HomeHeader />
      </Box>
    </Container>
  )
}
