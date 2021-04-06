import React from "react"
import {
  InputAdornment,
  TextField,
  SvgIcon,
  makeStyles,
} from "@material-ui/core"
import { ReactComponent as emailIcon } from "../assets/icons/email.svg"

function EmailIcon() {
  return (
    <SvgIcon>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5675 8.9726H1.19863C1.10582 8.9726 1.0274 8.89452 1.0274 8.80137V1.50068L7.10171 5.47637C7.18733 5.53219 7.28493 5.56062 7.38288 5.56062C7.48253 5.56062 7.58185 5.53185 7.66815 5.47431L13.7387 1.42329V8.80137C13.7387 8.89452 13.6603 8.9726 13.5675 8.9726ZM12.4805 1.0274L7.38048 4.43116L2.18048 1.0274H12.4805ZM14.1527 0.159247C13.9788 0.0609589 13.7812 0 13.5675 0H1.19863C0.538014 0 0 0.537671 0 1.19863V8.80137C0 9.46233 0.538014 10 1.19863 10H13.5675C14.2281 10 14.7661 9.46233 14.7661 8.80137V1.19863C14.7661 0.856507 14.6199 0.549315 14.389 0.330479C14.3264 0.249315 14.2442 0.191096 14.1527 0.159247Z"
        fill="#222222"
      />
    </SvgIcon>
  )
}

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
      id="standard-basic"
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
