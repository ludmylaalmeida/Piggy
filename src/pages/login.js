import React from "react"
import { Box, Container, Grid, Hidden, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import LoginForm from "../components/loginForm"
import LoginIllustration from "../assets/images/login-illustration.svg"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import { AuthProvider } from "../context/AuthContext"

const useStyles = makeStyles(theme => ({
  piggyBankIllustration: {
    width: "80%",
  },
  containerStyle: {
    width: "90%",
    margin: "0 auto",
    maxWidth: 2000,
    [theme.breakpoints.up("sm")]: {
      marginTop: 40,
    },
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <AuthProvider>
      <Container maxWidth="lg">
        <Link to="/" style={{ textDecoration: "none" }}>
          <KeyboardBackspaceRoundedIcon
            fontSize="large"
            style={{ color: "#222" }}
          />
        </Link>
        <div className={classes.containerStyle}>
          <Grid container spacing={2}>
            <Hidden xsDown>
              <Grid item md={6}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <LoginIllustration
                    className={classes.piggyBankIllustration}
                  />
                </Box>
              </Grid>
            </Hidden>
            <Grid item md={6} xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <LoginForm />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </AuthProvider>
  )
}
