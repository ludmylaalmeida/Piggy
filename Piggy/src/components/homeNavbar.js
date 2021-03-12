import Grid from "@material-ui/core/Grid"
import React from "react"
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core"
import PiggyLogo from "../assets/logo/piggy-logo.svg"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    textTransform: "none",
    width: 131,
    height: 45,
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&:hover': {
    // backgroundColor: theme,
  },
}));

export default function HomeNavbar() {
  const classes = useStyles()
  return (
    <div>
        <img src={PiggyLogo} alt="Logo"/>
      <Button href="" className={classes.primaryButton}>
        Log In
      </Button>
    </div>
    
  )
}
