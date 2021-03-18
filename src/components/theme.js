import * as Colors from "../constants/colors"

import { createMuiTheme } from "@material-ui/core"

const overridesTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#FD6A7E",
      },
      label: {
        color: "#FFF",
      },
    },
  },
})

const theme = createMuiTheme({
  palette: {
    primary: Colors.PINK,
  },
})
