import React from "react"
import { Box, Button, makeStyles } from "@material-ui/core"
// import HomePageImage from "../assets/images/piggy-mobile-home.svg"

const useStyles = makeStyles(theme => ({
  componentMargin: {
    marginTop: 20,
    marginBottom: 20,
  },
  formContainer: {
    width: 350,
  },
  primaryButton: {
    marginTop: 30,
    textTransform: "none",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
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
}))

export default function HomePageMobile() {
  const classes = useStyles()
  return (
    <Box>
      {/* <img src={HomePageImage} width="300" /> */}
      <Button
        size="medium"
        className={classes.primaryButton}
        type="submit"
        fullWidth
      >
        Log In
      </Button>
      <Button
        variant="outlined"
        size="medium"
        className={classes.secondaryButton}
        type="submit"
        fullWidth
      >
        Sign Up
      </Button>
    </Box>
  )
}
