import { Link } from "gatsby"
import React from "react"
import {
  Box,
  Button,
  makeStyles,
  Hidden,
  useScrollTrigger,
  Grid,
  Typography,
  TableContainer,
} from "@material-ui/core"
import piggyImage from "../assets/images/home_page_illustration.svg"
import piggyMobile from "../assets/images/piggy_home_mobile.svg"

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
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  secondaryButton: {
    marginTop: 12,
    textTransform: "none",
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#222",
    backgroundColor: "#FFF",
    color: "#222",
    verticalAlign: "middle",
    "&:hover": {
      // backgroundColor: "#FB4369",
    },
  },
  headerTitle: {
    fontFamily: "Mazzard",
    fontWeight: 600,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
  },
  subTitle: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "1.2rem",
  },
}))

export default function HomeHeader() {
  const classes = useStyles()
  return (
    <Grid container alignItems="center">
      <Hidden smUp>
        <Grid item xs={12}>
          <img src={piggyMobile} width={300} />
        </Grid>
      </Hidden>
      <Grid item md={4} xs={12}>
        <Typography variant="h2" className={classes.headerTitle}>
          {" "}
          Track your investments and connect with others
          <Box component="div" display="inline" color="#FB4369">
            .
          </Box>
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.subTitle}
          gutterBottom
        >
          A social media for your investments.
        </Typography>
        <Hidden xsDown>
          <Link to="/signup/" style={{ textDecoration: "none" }}>
            <Button
              href=""
              style={{ fontWeight: 700 }}
              size="medium"
              className={classes.primaryButton}
            >
              Get Started
            </Button>
          </Link>
        </Hidden>
        <Hidden smUp>
          <Link to="/login/" style={{ textDecoration: "none" }}>
            <Button
              size="medium"
              className={classes.primaryButton}
              type="submit"
              fullWidth
            >
              Log In
            </Button>
          </Link>
          <Link to="/signup/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              size="medium"
              className={classes.secondaryButton}
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>
          </Link>
        </Hidden>
      </Grid>
      <Hidden xsDown>
        <Grid item md={8} xs={12}>
          <img src={piggyImage} width={700} />
        </Grid>
      </Hidden>
    </Grid>
  )
}
