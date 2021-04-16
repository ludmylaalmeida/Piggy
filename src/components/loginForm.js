import React from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Divider,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import { spacing } from "@material-ui/system"
import EmailInput from "../constants/emailInput"
import PasswordInput from "../constants/passwordInput"
import FacebookIcon from "@material-ui/icons/Facebook"

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

export default function LoginForm() {
  const [checked, setChecked] = React.useState(true)

  const handleChange = event => {
    setChecked(event.target.checked)
  }
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
      <Box mb="2rem">
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
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Remember me"
              labelPlacement="end"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" align="right" display="inline">
            Forgot password?
          </Typography>
        </Grid>
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
      <Typography
        variant="subtitle2"
        className={classes.componentMargin}
        align="center"
        gutterBottom
      >
        Don't have an account?{" "}
        <Link to="/signup/" color="#FD6A7E" style={{ textDecoration: "none" }}>
          Register
        </Link>
      </Typography>
      <div>
        <Divider variant="middle" />
        <Button
          href=""
          variant="outlined"
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.secondaryButton}
          type="submit"
          fullWidth
        >
          Log In with Google
        </Button>
        <Button
          href=""
          variant="outlined"
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.secondaryButton}
          type="submit"
          startIcon={<FacebookIcon />}
          fullWidth
        >
          Log In with Facebook
        </Button>
      </div>
    </div>
  )
}
