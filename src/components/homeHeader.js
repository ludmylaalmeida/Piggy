import { Link } from "gatsby";
import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Hidden,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    textTransform: "none",
    width: 131,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
    },
  },

  headerTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: "3em",
    },
  },
}))

export default function HomeHeader() {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h1" gutterBottom className={classes.headerTitle}> Track your investments and connect with others<Box component="div" display="inline" color="#FB4369">.</Box></Typography>
      <Typography variant="subtitle1" gutterBottom>A social media for your investments.</Typography>
        <Box pt={3} display="flex">
          <div>
            <Hidden xsDown>
              <Link to="/signup/" style = {{textDecoration: "none"}}>
              <Box>
                <Button
                  href=""
                  style={{ fontWeight: 700 }}
                  size="medium"
                  className={classes.primaryButton}
                >
                  Get Started
                </Button>
              </Box>
              </Link>
            </Hidden>
          </div>
        </Box>
    </div>
  )
}
