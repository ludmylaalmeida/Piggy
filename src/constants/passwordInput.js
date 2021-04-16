import React from "react"
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core"
import LockIcon from "../assets/icons/lock.svg"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

export default function PasswordInput() {

  const [values, setValues] = React.useState({
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <TextField
      required
      margin="normal"
      placeholder="Password"
      type="password"
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
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
