import DashboardNavbar from "../components/dashboardNavbar";
import { Box } from "@material-ui/core";
import React from "react";
import { Container } from "@material-ui/core"

export default function Index() {
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
    </Container>
  )
}