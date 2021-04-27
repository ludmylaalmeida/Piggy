import React, { useRef, useState } from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Divider,
  Typography,
  InputAdornment,
  TextField,
  makeStyles,
  FormControl,
  IconButton,
} from "@material-ui/core"
import { Link, navigate } from "gatsby"
import FacebookIcon from "@material-ui/icons/Facebook"
import GoogleIcon from "../assets/icons/google-icon.svg"
import LockIcon from "../assets/icons/lock.svg"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import EmailIcon from "../assets/icons/email.svg"
import { useAuth } from "../context/AuthContext"
import { Alert } from '@material-ui/lab'

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
  outlineInput: {
    "& .MuiInputAdornment-root": {
      alignItems: "flex-end",
    },
  },
}))

export default function CreateAccountForm() {
  const { signup} = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match")
    } 

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/createProfile")
    } catch {
      setError("Failed to create an account")
    }
    setError("")

    setLoading(false)
  }

  const [password, setPassword] = useRef("")
  const [email, setEmail] = useRef("")

  const [values, setValues] = React.useRef({
    showPassword: false,
  })

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword })
  // }

  const handleMouseDownPassword = event => {
    event.preventDefault()
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
          Sign up for Piggy
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          Fill in the required details and click Proceed.
        </Typography>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}
      <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          margin="normal"
          placeholder="Email"
          value={email}
          fullWidth
          inputRef={emailRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className={classes.outlineInput}>
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
          fullWidth
          helperText="At least 6 characters"
          inputRef={passwordRef}
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
                  onMouseDown={handleMouseDownPassword}
                >
                  {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          margin="normal"
          placeholder="Confirm Password"
          type="password"
          value={password}
          fullWidth
          inputRef={confirmPasswordRef}
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
                  onMouseDown={handleMouseDownPassword}
                >
                  {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.primaryButton}
          type="submit"
          fullWidth
          disabled={loading}
        >
          Continue
        </Button>
        </FormControl>
      </form>
      {/* <Link to="/createProfile/" style={{ textDecoration: "none" }}> */}
      {/* </Link> */}
      <Typography
        variant="subtitle2"
        className={classes.componentMargin}
        align="center"
        gutterBottom
      >
        By signing up, you are automatically accepting all the{" "}
        <Link href="#" color="#FD6A7E">
          Terms & Conditions.
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
          startIcon={<GoogleIcon />}
          type="submit"
          fullWidth
        >
          Register with Google
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
          Register with Facebook
        </Button>
      </div>
    </div>
  )
}
