import React from "react"
import {
  AppBar,
  Toolbar,
  Divider,
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Menu,
  MenuIcon,
  Hidden,
  MenuItem,
  Badge,
  IconButton,
  useTheme,
} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import NotificationIcon from "../assets/images/bell.svg"
import PiggyLogo from "../assets/logo/piggy-logo.svg"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "../assets/icons/home-icon.svg"
import ChatsIcon from "../assets/icons/chat-icon.svg"
import GroupsIcon from "../assets/icons/groups-icon.svg"
import SignOutIcon from "../assets/icons/sign-out-icon.svg"
import { useDownloadMenuStyles } from "@mui-treasury/styles/menu/download"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const drawerWidth = 200

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
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  sectionDesktop: {
    marginLeft: 100,
  },
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
  const [anchorEl, setAnchorEl] = React.useState(null)
  const theme = useTheme();

  const downloadMenuClasses = useDownloadMenuStyles()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
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
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Box>
            <PiggyLogo className={classes.logoWrap} />
          </Box>
          <Box flexGrow={1}>
            <Box className={classes.search} flexGrow={1}>
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
            </Box>
          </Box>
          <Box>
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge color="primary">
                  <NotificationIcon />
                </Badge>
              </IconButton>

              <Button
                className={downloadMenuClasses.button}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ borderColor: "transparent" }}
              >
                <AccountCircle
                  className={downloadMenuClasses.downloadIcon}
                  style={{ color: "#FD6A7E" }}
                />
                <span>Name</span>
                <ExpandMoreIcon
                  className={
                    anchorEl
                      ? downloadMenuClasses.upIcon
                      : downloadMenuClasses.downIcon
                  }
                  style={{ color: "#FD6A7E" }}
                />
              </Button>
              <Menu
                id="simple-menu"
                classes={{ paper: downloadMenuClasses.paper }}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box ml={16}>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          elevation={0}
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Hidden>
      </Box>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
