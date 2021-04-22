import React from "react"
import { Link } from "gatsby"
import { Box, Button, makeStyles, Hidden } from "@material-ui/core"
import PiggyLogo from "../assets/logo/piggy-logo.svg"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    fontFamily: "Lato",
    textTransform: "none",
    width: 131,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
    textDecoration: "none",
    boxShadow: "none",
    marginLeft: theme.spacing(4),
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
    },
  },
  logoWrap: {
    maxHeight: 50,
    width: 120,
    [theme.breakpoints.up("sm")]: {
      width: 100,
    },
    [theme.breakpoints.up("md")]: {
      width: 120,
    },
  },
  textButtons: {
    fontFamily: "Lato",
    color: "#222",
    textTransform: "none",
    verticalAlign: "middle",
    textDecoration: "none",
    boxShadow: "none",
    marginLeft: theme.spacing(4),
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#FD6A7E",
    },
    "&:active": {
      color: "#222",
    },
  },
}))

export default function HomeNavbar() {
  const classes = useStyles()
  return (
    <div>
      <Box pt={1} display="flex">
        <Box flexGrow={1}>
          <PiggyLogo className={classes.logoWrap} />
        </Box>
        <div>
          <Hidden xsDown>
            <Box>
              <Link
                to=""
                component="button"
                variant="body1"
                style={{ fontWeight: 700, textDecoration: "none" }}
                className={classes.textButtons}
              >
                Who We Are
              </Link>
              <Link
                to="/login/"
                component="button"
                variant="body1"
                style={{ fontWeight: 700, textDecoration: "none" }}
                className={classes.textButtons}
              >
                Log In
              </Link>
              <Link to="/signup/" style={{ textDecoration: "none" }}>
                <Button
                  style={{ fontWeight: 700 }}
                  size="medium"
                  className={classes.primaryButton}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          </Hidden>
        </div>
      </Box>
    </div>
  )
}
