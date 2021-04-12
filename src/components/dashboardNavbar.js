import Grid from "@material-ui/core/Grid"
import React from "react"
import PiggyLogo from "../assets/logo/piggy-logo.svg"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import { Box, fade, makeStyles } from "@material-ui/core"
import NotificationAlertIcon from "../assets/images/bell-alert.svg"
import UserIcon from "../assets/images/user-icon.svg"
import NavbarPath from "../assets/images/path.svg"
// import NotificationIcon from "../assets/images/bell.svg";

const useStyles = makeStyles(theme => ({
  logoWrap: {
    maxHeight: 50,
    width: 120,
    [theme.breakpoints.up("sm")]: {
      width: 100,
    },
    [theme.breakpoints.up("md")]: {
      width: 120,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F6F9",
    "&:hover": {
      backgroundColor: fade("#F5F6F9", 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8E8E93",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

export default function DashboardNavbar() {
  const classes = useStyles()
  return (
    <div>
      <Box pt={1} display="flex">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Box flexGrow={1}>
              <img className={classes.logoWrap} src={PiggyLogo} alt="Logo" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box flexGrow={1}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search for a group or topic"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box flexGrow={1}></Box>
          </Grid>
          <Grid item xs={1}>
            <Box flexGrow={1}>
              <div className={classes.notificationsIcon}>
                <img
                  src={NotificationAlertIcon}
                  alt="Notification Alert Icon"
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box flexGrow={1}>
              <img src={UserIcon} alt="User Icon" />
              Alisha
              <img src={NavbarPath} alt="Path Icon" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
