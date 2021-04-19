import React from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  containerBackground: {
    backgroundColor: "#fff",
  },
  divider: {
    backgroundColor: "#F3F3F3",
    color: "#CEC8C8",
    marginLeft: "-30px",
    marginRight: "-30px",
  },
  primaryButton: {
    textTransform: "none",
    width: 131,
    height: 40,
    borderRadius: 5,
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

const StyledTableCellHeader = withStyles(theme => ({
  head: {
    backgroundColor: "#F6F6F6",
    color: theme.palette.black,
    fontWeight: 700,
    borderBottom: 0,
  },
}))(TableCell)

const StyledTableCell = withStyles(theme => ({
  root: {
    borderColor: "#F3F3F3",
    borderCollapse: "separate",
    borderSpacing: "0 5px",
  },
}))(TableCell)

function createData(name, members, membership, status) {
  return { name, members, membership, status }
}

const rows = [
  createData("Personal Finance", 159, "member", "public"),
  createData("Investiments Bros", 237, "moderator", "private"),
]

export default function GroupSection() {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Paper elevation={0}>
        <Box p={4}>
          <Box pb={1}>
            <Typography variant="h6">My Groups</Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box mb={4} mt={2}>
            <Button className={classes.primaryButton}>Create Group</Button>
          </Box>
          <TableContainer component={Paper} elevation={0}>
            <Table
              className={classes.table}
              stickyHeader
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCellHeader>Group Name</StyledTableCellHeader>
                  <StyledTableCellHeader align="left">
                    Members
                  </StyledTableCellHeader>
                  <StyledTableCellHeader align="left">
                    Membership
                  </StyledTableCellHeader>
                  <StyledTableCellHeader align="left">
                    Status
                  </StyledTableCellHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.members}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.membership}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Container>
  )
}
