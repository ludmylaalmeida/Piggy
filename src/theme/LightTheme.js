import * as Colors from "../constants/colors"

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const LightTheme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.PINK,
      contrastText: Colors.WHITE,
    },
    text: {
      primary: Colors.TEXT_PRIMARY,
      secondary: Colors.TEXT_SECONDARY,
      disabled: Colors.TEXT_DISABLED,
      divider: Colors.TEXT_DIVIDER,
    },
    error: {
      light: Colors.ERROR_LIGHT,
      main: Colors.ERROR_MAIN,
      dark: Colors.ERROR_DARK,
    },
    warning: {
      light: Colors.WARNING_LIGHT,
      main: Colors.WARNING_MAIN,
      dark: Colors.WARNING_DARK,
    },
    success: {
      light: Colors.SUCCESS_LIGHT,
      main: Colors.SUCCESS_MAIN,
      dark: Colors.SUCCESS_DARK,
    },
    info: {
      light: Colors.INFO_LIGHT,
      main: Colors.INFO_MAIN,
      dark: Colors.INFO_DARK,
    },
  },
  overrides: {
    ...overrides,
  },
})
