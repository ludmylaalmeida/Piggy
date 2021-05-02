import React, { useRef, useState } from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  Paper,
  Table,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
  Modal,
  Backdrop,
  Fade,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core"
import CloseIcon from "../assets/icons/close.svg"

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
  primaryButtonModal: {
    textTransform: "none",
    width: "100%",
    marginTop: 10,
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
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
  const [privacy, setPrivacy] = React.useState('')

const handleChange = (event) => {
  setPrivacy(event.target.value);
}

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={0}>
        <Box p={4}>
          <Box pb={1}>
            <Typography variant="h6">My Groups</Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box mb={4} mt={2}>
            <Button className={classes.primaryButton} onClick={handleOpen}>
              Create Group
            </Button>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={11}>
                    <h2 id="transition-modal-title" align="center" style={{marginTop: 0}}>
                      Create Group
                    </h2>
                  </Grid>
                  <Grid item xs={1}>
                    <span>
                      <CloseIcon />
                    </span>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <FormControl
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  fullWidth
                >
                  <TextField
                    id="standard-basic"
                    label="Group name"
                    margin="normal"
                    required
                  />
                  <FormControl p={2}>
                    <InputLabel id="group-privacy-select">Group privacy</InputLabel>
                    <Select
                      labelId="group-privacy-select"
                      id="group-privacy-simple-select"
                      value={privacy}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Public</MenuItem>
                      <MenuItem value={2}>Private</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="standard-basic"
                    label="Group description"
                    margin="normal"
                    multiline
                    required
                  />
                  <Button className={classes.primaryButtonModal} fullWidth>Create</Button>
                </FormControl>
              </div>
            </Fade>
          </Modal>
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
