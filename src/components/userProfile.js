import React from "react"
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core"
import AccountIcon from "@material-ui/icons/AccountCircle"
import EditBtn from "../assets/icons/edit-button.svg"
import { Row, Item } from "@mui-treasury/components/flex"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: "#F3F3F3",
    color: "#CEC8C8",
    marginLeft: "-31px",
    marginRight: "-31px",
  },
  avatarStyles: {
    height: 80,
    width: 80,
    radius: 8,
    marginRight: 12,
  },
  primaryButton: {
    textTransform: "none",
    width: 100,
    height: 30,
    borderRadius: 5,
    fontWeight: 500,
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

export default function UserProfile() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Paper eleveation={0}>
        <Box p={4}>
          <Box pb={2} display="flex">
            <Box flexGrow={1}>
              <Typography variant="h6" align="center">
                iamalisha
              </Typography>
            </Box>
            <Box>
              <EditBtn />
            </Box>
          </Box>
          <Divider className={classes.divider} />
          <Box pb={1} pt={2} display="flex">
            <Grid container>
              <Grid item xs={1}>
                <AccountIcon color="primary" style={{ fontSize: 70 }} />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="h6">Alisha Woods</Typography>
                <Typography variant="p">Female, 27, Atlanta GA</Typography>
              </Grid>
              <Grid container xs={4} justify="flex-end" alignItems="flex-start">
                <Grid item xs>
                  <Box ml={2}>
                    <Typography variant="p">Followers</Typography>
                    <Typography variant="h4">359</Typography>
                  </Box>
                </Grid>
                <Divider
                  orientation="vertical"
                  style={{ backgroundColor: "#F3F3F3", color: "#CEC8C8" }}
                />
                <Grid item xs>
                  <Box ml={2}>
                    <Typography variant="p">Following</Typography>
                    <Typography variant="h4">20</Typography>
                  </Box>
                </Grid>
                <Divider
                  orientation="vertical"
                  style={{ backgroundColor: "#F3F3F3", color: "#CEC8C8" }}
                />
                <Grid item xs>
                  <Box ml={2}>
                    <Typography variant="p">Posts</Typography>
                    <Typography variant="h4">4</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <p>Here is a little something about me.</p>
          <Divider className={classes.divider} />
          <Box pt={1} pb={2}>
            <Typography variant="h6">Groups</Typography>
          </Box>
          <Box direction="row">
            <Row>
              <Item>
                <Avatar
                  variant={"rounded"}
                  className={classes.avatarStyles}
                  src={
                    "https://freedesignfile.com/upload/2016/03/Abstract-geometric-petals-vector-graphic-03.jpg"
                  }
                />
              </Item>
              <Box pr={4}>
                <Typography variant="subtitle1">Personal Finance</Typography>
                <Typography variant="p">2.1m Members</Typography>
              </Box>
              <Button
                href=""
                style={{ fontWeight: 700 }}
                size="medium"
                className={classes.primaryButton}
              >
                Join
              </Button>
            </Row>
            <Row mt={2}>
              <Item>
                <Avatar
                  variant={"rounded"}
                  className={classes.avatarStyles}
                  style={{backgroundColor: "#B401FD"}}
                />
              </Item>
              <Box pr={4}>
                <Typography variant="subtitle1">Wall Street Bets</Typography>
                <Typography variant="p">1m Members</Typography>
              </Box>
              <Button
                href=""
                style={{ fontWeight: 700 }}
                size="medium"
                className={classes.primaryButton}
              >
                Join
              </Button>
            </Row>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
