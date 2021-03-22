import HomeNavbar from "../components/homeNavbar";
import HomeImage from "../components/homeImage";
import React from "react";
import {Grid} from "@material-ui/core"; 

export default function Index() {
  return (

    <div>
      <HomeNavbar />
      <Grid item xs={12} md={6}>
      <HomeImage />
      </Grid> 

    </div>
  )
}
