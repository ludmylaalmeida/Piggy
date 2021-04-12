import React from "react"
import {
  AppBar,
  Toolbar,
  Box,
  fade,
  IconMenu,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  Menu,
  MenuIcon,
  Badge,
  IconButton,
  SvgIcon,
} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import NavbarPath from "../assets/images/path.svg"
import NotificationIcon from "../assets/images/bell.svg"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import PiggyLogo from "../assets/logo/piggy-logo.svg"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"
import HomeIcon from "../assets/icons/home-icon.svg"
import ChatsIcon from "../assets/icons/chat-icon.svg"
import GroupsIcon from "../assets/icons/groups-icon.svg"
import SignOutIcon from "../assets/icons/sign-out-icon.svg"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#FFF",
  },
  root: {
    display: "flex",
    margin: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
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
    color: "#222",
    backgroundColor: "#F5F6F9",
    marginLeft: theme.spacing(16),
    width: 400,
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
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        {/* <Toolbar>
              <div className={classes.sectionDesktop}>
                {/* <NotificationIcon />
              <AccountCircle
                style={{ alignItems: "center" }}
                color="primary"
              />
              <Typography variant="subtitle2">Name</Typography>
              <NavbarPath /> */}
        <Toolbar>
          <Box>
            <PiggyLogo className={classes.logoWrap} />
          </Box>
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        elevation={0}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ChatsIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SignOutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}
