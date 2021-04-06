import React from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  makeStyles,
  TextField,
  Grid,
  Typography,
  Hidden,
} from "@material-ui/core"
import { Link } from "gatsby"
import CreateAccountIllustration from "../assets/images/Create-account-illustration.svg"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import AccountCircle from "@material-ui/icons/AccountCircle"

const useStyles = makeStyles(theme => ({
  componentMargin: {
    marginTop: 20,
    marginBottom: 20,
  },
  piggyBankIllustration: {
    width: "80%",
  },
  containerStyle: {
    width: "90%",
    margin: "0 auto",
    maxWidth: 2000,
    [theme.breakpoints.up("sm")]: {
      marginTop: 80,
    },
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

export default function CreateProfile() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Link to="/signup/">
        <KeyboardBackspaceRoundedIcon
          fontSize="large"
          style={{ color: "#222" }}
        />
      </Link>
      <div className={classes.containerStyle}>
        <Grid container spacing={3}>
          <Hidden xsDown>
            <Grid md={6}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  src={CreateAccountIllustration}
                  className={classes.piggyBankIllustration}
                  alt="Piggy bank"
                />
              </Box>
            </Grid>
          </Hidden>
          <Grid item md={6} xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <div className={classes.formContainer}>
                <Box mb="2rem">
                  <Box
                    fontFamily="Lato"
                    fontSize="h5.fontSize"
                    fontWeight="fontWeightBold"
                  >
                    Set up your profile
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                    Fill in the required details and click Proceed.
                  </Typography>
                  <Grid align="center">
                    <AccountCircle
                      style={{ fontSize: 100, alignItems: "center" }}
                      color="primary"
                    />
                    <Typography variant="subtitle2">
                      Set Profile Picture
                    </Typography>
                  </Grid>
                </Box>

                <form className={classes.root} noValidate autoComplete="on">
                  <TextField
                    required
                    margin="normal"
                    placeholder="Name"
                    fullWidth
                  />
                  <TextField
                    margin="normal"
                    id="date"
                    label="Birthday"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                  <TextField
                    required
                    margin="normal"
                    id="standard-basic"
                    placeholder="Gender"
                    fullWidth
                  />
                  <TextField
                    required
                    margin="normal"
                    id="standard-basic"
                    placeholder="Location"
                    fullWidth
                  />
                </form>
                <Button
                  href=""
                  style={{ fontWeight: 700 }}
                  size="medium"
                  className={classes.primaryButton}
                  type="submit"
                  fullWidth
                >
                  Save
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
