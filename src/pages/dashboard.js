import DashboardNavbar from "../components/dashboardNavbar"
import React from "react"
import { Container } from "@material-ui/core"

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <DashboardNavbar />
    </Container>
  )
}
