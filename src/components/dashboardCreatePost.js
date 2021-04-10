import React from "react"
import InputBase from "@material-ui/core/InputBase"
import { Box, makeStyles, Grid, Typography, fade } from "@material-ui/core"
import PostMedia from "../assets/images/create-post.svg"
import UserIcon from "../assets/images/user-icon.svg"

const useStyles = makeStyles(theme => ({
  dashboardGridWrap: {
    marginTop: theme.spacing(2),
  },
  welcomeHeader: {
    marginLeft: theme.spacing(3),
    fontWeight: 800,
    fontSize: "1.2rem",
  },
  newMessages: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontSize: "0.9rem",
    fontWeight: 800,
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
  postMediaWrap: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
    width: 280,
  },
  userIconWrap: {
    marginLeft: theme.spacing(3),
  },
}))

export default function DashboardCreatePost() {
  const classes = useStyles()
  return (
    <div className={classes.dashboardGridWrap}>
      <Box pt={1} display="flex">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box flexGrow={1}>Left Sidebar Here</Box>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.middleWrap}>
              <Box flexGrow={1}>
                <div className={classes.welcomeHeader}>Welcome Alisha!</div>
                <Typography
                  variant="subtitle1"
                  className={classes.newMessages}
                  gutterBottom
                >
                  You have two new messages!
                </Typography>
                <Box pt={1} display="flex">
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <Box flexGrow={1}>
                        <img
                          src={UserIcon}
                          className={classes.userIconWrap}
                          alt="User Icon"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={11}>
                      <Box flexGrow={1}>
                        <div className={classes.search}>
                          <InputBase
                            placeholder="Start a post"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                          />
                        </div>
                        <img
                          src={PostMedia}
                          className={classes.postMediaWrap}
                          alt="photo, video, document"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rightWrap}>
              <Box flexGrow={1}>Right Sidebar Here</Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
