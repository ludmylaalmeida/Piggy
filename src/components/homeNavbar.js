import Grid from "@material-ui/core/Grid"
import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Button,
  makeStyles,
  Hidden,
  useScrollTrigger,
  Typography,
} from "@material-ui/core"
import PiggyLogo from "../assets/logo/piggy-logo.svg"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    textTransform: "none",
    width: 131,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
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
    textTransform: "none",
    verticalAlign: "middle",
    marginLeft: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#FD6A7E",
    },
  },
}))

export default function HomeNavbar() {
  const classes = useStyles()
  return (
    <div>
      <Box pt={1} display="flex">
        <Box flexGrow={1}>
          <img className={classes.logoWrap} src={PiggyLogo} alt="Logo" />
        </Box>
        <div>
          <Hidden xsDown>
            <Box>
              <Button
                style={{ fontWeight: 700 }}
                className={classes.textButtons}
              >
                Who we are
              </Button>
              <Link to="/login/">
                <Button
                  style={{ fontWeight: 700 }}
                  className={classes.textButtons}
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup/">
                <Button
                  href=""
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
