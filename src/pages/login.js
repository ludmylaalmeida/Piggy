import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"
import LoginForm from "../components/loginForm"
import LoginIllustration from "../assets/images/login-illustration.svg"
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

const useStyles = makeStyles(theme => ({
  piggyBankIllustration: {
    width: '60%',
  }
}))

export default function About() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <KeyboardBackspaceRoundedIcon fontSize="large"/>
      <Grid container mt={10} spacing={3}>
        <Grid item md={6} xs={12} justify="evenly">
          <img src={LoginIllustration} className={classes.piggyBankIllustration} alt="Piggy bank"/>
        </Grid>
        <Grid item md={6} xs={12} alignContent="start">
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  )
}
