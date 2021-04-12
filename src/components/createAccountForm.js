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
  Icon,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import EmailInput from "../constants/emailInput"
import PasswordInput from "../constants/passwordInput"
import FacebookIcon from "@material-ui/icons/Facebook"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabGoogle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

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

export default function CreateAccountForm() {
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
          Create your account
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          Fill in the required details and click Proceed.
        </Typography>
      </Box>

      <form className={classes.root} noValidate autoComplete="on">
        <EmailInput />
        <PasswordInput />
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
      </Grid>
      <Link to="/createProfile/">
        <Button
          href=""
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.primaryButton}
          type="submit"
          fullWidth
        >
          Continue
        </Button>
      </Link>
      <Typography
        variant="subtitle2"
        className={classes.componentMargin}
        align="center"
        gutterBottom
      >
        By Creating Account, you are automatically accepting all the Terms &
        Conditions.
      </Typography>
      <div>
        <Divider variant="middle" />
        <Button
          href=""
          variant="outlined"
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.secondaryButton}
          startIcon={<FontAwesomeIcon icon="fab fa-google"/>}
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
