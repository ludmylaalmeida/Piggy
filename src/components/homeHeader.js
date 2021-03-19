import Grid from "@material-ui/core/Grid"
import React from "react"
import {
  Box,
  Button,
  makeStyles,
  Hidden,
  useScrollTrigger,
  Typography,
} from "@material-ui/core"
import PiggyHomeImage from "../assets/img/home_page_illustration.svg"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    textTransform: "none",
    width: 200,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
    marginLeft: theme.spacing(4),
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
    },
  },
  piggyHomeImageWrap: {
    maxHeight: 1014,
    width: 676,
  },
}))

export default function HomeHeader() {
  const classes = useStyles()
  return (
    <div>
    <h1>Track your investments and connect with others.</h1>
    <h2>A social media for your investments.</h2>
      <Box pt={17} display="flex">
        <Box flexGrow={1}>
          <img className={classes.piggyHomeImageWrap} src={PiggyHomeImage} alt="piggy bank" />
        </Box>
        <div>
          <Hidden xsDown>
            <Box>
              <Button
                href=""
                style={{ fontWeight: 700 }}
                size="large"
                className={classes.primaryButton}
              >
                Get Started
              </Button>
            </Box>
          </Hidden>
        </div>
      </Box>
    </div>
  )
}
