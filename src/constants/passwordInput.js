<<<<<<< HEAD
import React, { useState } from "react"
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core"
=======
import React from "react"
import { TextField, IconButton, InputAdornment } from "@material-ui/core"
>>>>>>> 1e0749cfa37544992b62cee0c3c44b2fad6ea8f2
import LockIcon from "../assets/icons/lock.svg"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

export default function PasswordInput() {
<<<<<<< HEAD

  const [password, setPassword] = useState('')

=======
>>>>>>> 1e0749cfa37544992b62cee0c3c44b2fad6ea8f2
  const [values, setValues] = React.useState({
    showPassword: false,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <TextField
      required
      margin="normal"
      placeholder="Password"
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
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
