import React from "react"
import CreateAccountForm from "../components/createAccountForm"
import { Box, Container, Grid, Hidden, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import CreateAccountIllustration from "../assets/images/Create-account-illustration.svg"
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

export default function Signup() {
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
          <Grid container spacing={3}>
            <Hidden xsDown>
              <Grid item md={6}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <CreateAccountIllustration
                    className={classes.piggyBankIllustration}
                  />
                </Box>
              </Grid>
            </Hidden>
            <Grid item md={6} xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <CreateAccountForm />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      </AuthProvider>
  )
}
