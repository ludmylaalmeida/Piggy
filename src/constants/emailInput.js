import React from "react"
import {
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core"
import EmailIcon from "../assets/icons/email.svg"

const useStyles = makeStyles(theme => ({
  outlineInput: {
    "& .MuiInputAdornment-root": {
      alignItems: "flex-end",
    },
  },
}))

export default function EmailInput() {
  const classes = useStyles()
  return (
    <TextField
      required
      margin="normal"
      placeholder="Email"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={classes.outlineInput}>
            <EmailIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}
