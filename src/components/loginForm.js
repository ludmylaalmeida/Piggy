import React, { useRef, useState } from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Divider,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  FormControl,
  IconButton,
  makeStyles,
} from "@material-ui/core"
import { Link, navigate } from "gatsby"
import FacebookIcon from "@material-ui/icons/Facebook"
import GoogleIcon from "../assets/icons/google-icon.svg"
import LockIcon from "../assets/icons/lock.svg"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import EmailIcon from "../assets/icons/email.svg"
import { useAuth } from "../context/AuthContext"
import { Alert } from "@material-ui/lab"

const useStyles = makeStyles(theme => ({
  componentMargin: {
    marginTop: 20,
    marginBottom: 20,
  },
  formContainer: {
    width: 350,
  },
  outlineInput: {
    "& .MuiInputAdornment-root": {
      alignItems: "flex-end",
    },
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
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch {
      setError("Failed to log in")
    }
    setError("")

    setLoading(false)
  }

  const [password, setPassword] = useRef("")
  const [email, setEmail] = useRef("")

  const [values, setValues] = React.useRef({
    showPassword: false,
  })

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

      {error && <Alert severity="error">{error}</Alert>}
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth>
          <TextField
            required
            margin="normal"
            placeholder="Email"
            value={email}
            inputRef={emailRef}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.outlineInput}
                >
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            margin="normal"
            placeholder="Password"
            type="password"
            value={password}
            inputRef={passwordRef}
            fullWidth
            helperText="At least 6 characters"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container alignItems="center">
        <Grid item xs={6}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              // value={checked}
              control={<Checkbox color="primary" />}
              label="Remember me"
              labelPlacement="end"
              // onChange={e => setChecked(e.target.checked)}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" align="right" display="inline">
            Forgot password?
          </Typography>
        </Grid>
      </Grid>
      {/* <Link to="/dashboard/" style={{ textDecoration: "none" }}> */}
      <Button
        href=""
        style={{ fontWeight: 700 }}
        size="medium"
        className={classes.primaryButton}
        type="submit"
        disabled={loading}
        fullWidth
      >
        Log In
      </Button>
      {/* </Link> */}
        </FormControl>
      </form>
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
          startIcon={<GoogleIcon />}
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
