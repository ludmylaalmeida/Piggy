import React from "react"
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  fade,
  Paper,
  Modal,
} from "@material-ui/core"
import PostMedia from "../assets/images/create-post.svg"
import UserIcon from "../assets/images/user-icon.svg"

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

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
    color: "#8E8E93",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },

  postMediaWrap: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
    width: 280,
  },
  userIconWrap: {
    marginLeft: theme.spacing(2),
  },
  paperWrap: {
    marginLeft: theme.spacing(3),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(10),
    },
  },
}))

export default function DashboardCreatePost() {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.search}>
      <h2 id="simple-modal-title">Create Post</h2>
      <p id="simple-modal-description">What's on your mind?</p>
    </div>
  )

  return (
    <div className={classes.dashboardGridWrap}>
      <Box pt={1} display="flex">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box flexGrow={1}></Box>
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
                <Paper className={classes.paperWrap} elevation={0}>
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
                          <div
                            className={classes.search}
                            type="button"
                            onClick={handleOpen}
                          >
                            Start a post
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                              {body}
                            </Modal>
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
                </Paper>
              </Box>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rightWrap}>
              <Box flexGrow={1}></Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
