import Grid from "@material-ui/core/Grid";
import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Hidden,
  useScrollTrigger,
  Typography,
  TableContainer,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  primaryButton: {
    textTransform: "none",
    width: 131,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FD6A7E",
    color: "#fff",
    marginLeft: theme.spacing(0),
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#FB4369",
    },
  },
}))

export default function HomeHeader() {
  const classes = useStyles()
  return (
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <Box mt={15}>
        <TableContainer className={classes.TableContainer}>
        <Typography variant="h1" gutterBottom>Track your investments and connect with others<Box component="div" display="inline" color="#FB4369">.</Box></Typography>
        <Typography variant="subtitle1" gutterBottom>A social media for your investments.</Typography>
          <Box pt={3} display="flex">
            <div>
              <Hidden xsDown>
                <Box>
                  <Button
                    href=""
                    style={{ fontWeight: 700 }}
                    size="medium"
                    className={classes.primaryButton}
                  >
                    Get Started
                  </Button>
                </Box>
              </Hidden>
            </div>
          </Box>
        </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TableContainer className={classes.TableContainer}></TableContainer>
      </Grid>
    </Grid>
    </div>
  )
}
