import React, { useRef, useState} from "react"
import "@fontsource/lato"
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  makeStyles,
  TextField,
  Grid,
  Typography,
  Hidden,
} from "@material-ui/core"
import { Link, navigate } from "gatsby"
import CreateAccountIllustration from "../assets/images/Create-account-illustration.svg"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import AccountCircle from "@material-ui/icons/AccountCircle"
import { useAuth } from "../context/AuthContext"
import { Alert } from '@material-ui/lab'

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
      marginTop: 40,
    },
  },
  formContainer: {
    width: 350,
  },
  input: {
    display: "none",
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

  const [name, setName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [gender, setGender] = useState("")
  const [location, setLocation] = useState("")

  return (
    <Container maxWidth="lg">
      <Link to="/signup/" style={{ textDecoration: "none" }}>
        <KeyboardBackspaceRoundedIcon
          fontSize="large"
          style={{ color: "#222" }}
        />
      </Link>
      <div className={classes.containerStyle}>
        <Grid container spacing={3}>
          <Hidden xsDown>
            <Grid item md={6}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <CreateAccountIllustration
                  className={classes.piggyBankIllustration}
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
                    <Grid align="center">
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="button-file"
                        type="file"
                      />
                      <label htmlFor="button-file">
                        <Button size="small" component="span">
                          Set Profile Picture
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                </Box>

                <form className={classes.root} noValidate autoComplete="on">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        margin="normal"
                        placeholder="First Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        margin="normal"
                        placeholder="Last Name"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    margin="normal"
                    id="date"
                    label="Birthday"
                    type="date"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <InputLabel id="gender-select">Gender</InputLabel>
                    <Select
                      labelId="gender-select"
                      id="demo-simple-select"
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                    >
                      <MenuItem value={1}>Female</MenuItem>
                      <MenuItem value={2}>Male</MenuItem>
                      <MenuItem value={3}>Gender Fluid</MenuItem>
                      <MenuItem value={4}>Other</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    margin="normal"
                    placeholder="Current City"
                    fullWidth
                  />
                </form>
                <Link to="/dashboard/" style={{ textDecoration: "none" }}>
                  <Button
                    href=""
                    style={{ fontWeight: 700 }}
                    size="medium"
                    className={classes.primaryButton}
                    type="submit"
                    // onClick={Register}
                    fullWidth
                  >
                    Save
                  </Button>
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
