import React from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Divider,
  makeStyles,
  Link,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core"
import { spacing } from "@material-ui/system"
import EmailInput from "../constants/emailInput"
import PasswordInput from "../constants/passwordInput"

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: 350,
  },
  primaryButton: {
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
}))

export default function LoginForm() {
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
      <Box mb="4rem">
        <Box
          fontFamily="Lato"
          fontSize="h5.fontSize"
          fontWeight="fontWeightBold"
        >
          Welcome to Piggy!
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          Login to continue using your account.
        </Typography>
      </Box>

      <form className={classes.root} noValidate autoComplete="on">
        <EmailInput />
        <PasswordInput />
      </form>
      <Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
      <Button
        href=""
        style={{ fontWeight: 700 }}
        size="medium"
        className={classes.primaryButton}
        type="submit"
        fullWidth
      >
        Log In
      </Button>
      <Typography variant="subtitle2" align="center" gutterBottom>
        Don't have an account?{" "}
        <Link href="#" color="#FD6A7E">
          Register
        </Link>
      </Typography>
      <div>
        <Divider variant="middle" />
      </div>
    </div>
  )
}
