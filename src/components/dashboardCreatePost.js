import React from "react"
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  fade,
  Paper,
  Divider,
  Modal,
  Button,
  Link,
} from "@material-ui/core"
import PostMedia from "../assets/images/create-post.svg"
import UserIcon from "../assets/images/user-icon.svg"
import CloseIcon from "../assets/icons/close.svg"
import AccountIcon from "@material-ui/icons/AccountCircle"
import BookmarkIcon from "../assets/icons/bookmark-icon.svg"
import HorizontalIcon from "../assets/icons/horizontal-icon.svg"
import PostMediaExample from "../assets/images/post-media-example.svg"

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
  modalUserIconWrap: {
    marginTop: theme.spacing(2),
  },
  paperWrap: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(10),
    },
  },
  oldPostPaperWrap: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(18),
    },
  },
  oldPostPaperWrap2: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(45),
    },
  },
  modalWrap: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  oldPostUserName: {
    marginLeft: theme.spacing(3),
    fontWeight: 700,
  },
  oldPostContent: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    fontSize: 12,
  },
  dividerWrap: {
    padding: theme.spacing(0, 0, 0),
  },
  modalNameWrap: {
    fontWeight: 700,
  },
  createPostTempSpace: {
    padding: theme.spacing(15, 0, 0),
  },
  createPostTextWrap: {
    fontSize: 16,
    fontweight: 800,
  },
  addPostMediaButton: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  divider: {
    backgroundColor: "#F3F3F3",
    color: "#CEC8C8",
    marginLeft: "-30px",
    marginRight: "-30px",
  },
  footerWrap: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(0),
  },
  postFooter: {
    fontSize: 12,
  },
  postFooterMediaWrap: {
    width: 24,
  },
  primaryButton: {
    textTransform: "none",
    width: 450,
    height: 50,
    borderRadius: 5,
    fontWeight: 700,
    marginTop: theme.spacing(1),
    backgroundColor: "#FD6A7E",
    color: "#fff",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
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
    <div style={modalStyle} className={classes.modalWrap}>
      <Box pt={1} display="flex">
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <h2 className={classes.createPostTextWrap} align="center">
              Create Post
            </h2>
          </Grid>
          <Grid item xs={1}>
            <span>
              <CloseIcon />
            </span>
          </Grid>
        </Grid>
      </Box>
      <Divider light className={classes.dividerWrap} />
      <Box pt={1} display="flex">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <AccountIcon
              className={classes.modalUserIconWrap}
              color="primary"
              style={{ fontSize: 36 }}
            />
          </Grid>
          <Grid item xs={7}>
            <p className={classes.modalNameWrap}>Alisha Woodwards</p>
            <p>What's on your mind?</p>
            <div className={classes.createPostTempSpace}></div>
          </Grid>
        </Grid>
      </Box>
      <Divider light className={classes.dividerWrap} />
      <Box pt={1} display="flex">
        <Grid container spacing={2}>
          <Grid item xs={2} className={classes.addPostMediaButton}>
            Add
          </Grid>
          <Grid item xs={7}>
            <PostMedia className={classes.postMediaWrap} />
          </Grid>
        </Grid>
      </Box>
      <Link to="" style={{ textDecoration: "none" }} align="center">
        <Button
          href=""
          style={{ fontWeight: 700 }}
          size="medium"
          className={classes.primaryButton}
        >
          Post
        </Button>
      </Link>
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
                          <AccountIcon
                            className={classes.userIconWrap}
                            color="primary"
                            style={{ fontSize: 36 }}
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
                          <PostMedia className={classes.postMediaWrap} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
                <Paper className={classes.oldPostPaperWrap} elevation={0}>
                  <Box pt={1} display="flex">
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <Box flexGrow={1}>
                          <AccountIcon
                            className={classes.userIconWrap}
                            color="primary"
                            style={{ fontSize: 36 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={11}>
                        <Box flexGrow={1} className={classes.oldPostUserName}>
                          Matthew Brown
                        </Box>
                      </Grid>
                      <Grid
                        container
                        spacing={1}
                        className={classes.oldPostContent}
                      >
                        <Grid item xs={12}>
                          <Box flexGrow={1}>
                            <Typography variant="p">
                              The finance team is hiring at Drift. To learn more
                              about our Staff Accountant role check this out:
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p">
                              <Link to="https://lnkd.in/eXPhZvk">
                                https://lnkd.in/eXPhZvk
                              </Link>
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p">
                              I'm an #accountant still recovering from
                              #publicaccounting
                            </Typography>
                            <br />
                            <br />
                            <Divider className={classes.divider} />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box pt={1} display="flex">
                    <Grid container spacing={1} className={classes.footerWrap}>
                      <Grid item xs={2}>
                        <Box flexGrow={1} className={classes.postFooter}>
                          21 likes
                        </Box>
                      </Grid>
                      <Grid item xs={2} className={classes.postFooter}>
                        <Box flexGrow={1}>7 comments</Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box flexGrow={1}></Box>
                      </Grid>
                      <Grid item xs={1}>
                        <Box flexGrow={1}>
                          <BookmarkIcon
                            className={classes.postFooterMediaWrap}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={1}>
                        <Box flexGrow={1}>
                          <HorizontalIcon
                            className={classes.postFooterMediaWrap}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
                <Paper className={classes.oldPostPaperWrap2} elevation={0}>
                  <Box pt={1} display="flex">
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <Box flexGrow={1}>
                          <AccountIcon
                            className={classes.userIconWrap}
                            color="primary"
                            style={{ fontSize: 36 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={11}>
                        <Box flexGrow={1} className={classes.oldPostUserName}>
                          Tiffany McDonald
                        </Box>
                      </Grid>
                      <Grid
                        container
                        spacing={1}
                        className={classes.oldPostContent}
                      >
                        <Grid item xs={12}>
                          <Box flexGrow={1}>
                            <Typography variant="p">
                              Our Latest Weekly View: Why are Interest Rates
                              Rising...and What Does it Mean for the Stock
                              Market?
                            </Typography>
                            <PostMediaExample
                              style={{ width: "500px", paddingBottom: "80px" }}
                            />
                            <br />
                            <br />
                          </Box>
                        </Grid>
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
