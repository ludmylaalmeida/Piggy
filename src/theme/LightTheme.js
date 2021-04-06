import * as Colors from "../constants/colors"
import Mazzard from "../assets/fonts/MazzardH-Bold.otf"

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const mazzard = {
  fontFamily: 'Mazzard',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `
    local('Mazzard'),
    url(${Mazzard}) format(opentype')
  `,
};

export const LightTheme = responsiveFontSizes(
  createMuiTheme({
  typography: {
    fontFamily: "Mazzard",
    headerLink: {
      fontFamily: "Mazzard",
    },
    h1: {
      fontFamily: "Mazzard",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Mazzard",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Mazzard",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Mazzard",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Mazzard",
      fontWeight: 800,
    },
    h6: {
      // fontFamily: "Mazzard",
      // fontWeight: 400,
      fontFamily: "Mazzard",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Lato",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "Lato",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Lato",
    },
    body2: {
      fontFamily: "Lato",
    },
    button: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: 16,
      textTransform: "capitalize",
    },
    caption: {
      fontFamily: "Lato",
      fontWeight: 500,
    },
    overline: {
      fontFamily: "Lato",
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [mazzard],
      },
    },
  },
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
  }
}))