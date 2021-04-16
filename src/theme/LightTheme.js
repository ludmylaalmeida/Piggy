import * as Colors from "../constants/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

export const LightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "Lato",
      headerLink: {
        fontFamily: "Lato",
      },
      h1: {
        fontFamily: "Lato",
        fontWeight: 800,
      },
      h2: {
        fontFamily: "Lato",
        fontWeight: 700,
      },
      h3: {
        fontFamily: "Lato",
        fontWeight: 700,
      },
      h4: {
        fontFamily: "Lato",
        fontWeight: 700,
      },
      h5: {
        fontFamily: "Lato",
        fontWeight: 800,
      },
      h6: {
        // fontFamily: "Lato",
        // fontWeight: 400,
        fontFamily: "Lato",
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
        "@global": {
          "@font-face": "Lato",
        },
      },
      MuiListItem: {
        root: {
          "&$focusVisible": {
            backgroundColor: "#FFF3F4",
            color: "#FD6A7E",
            "&:hover": {
              backgroundColor: "#FD6A7E",
              color: "#FFF",
            },
          },
          "&$selected": {
            backgroundColor: "#FFF3F4",
            color: "#FD6A7E",
          },
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
      action: {
        selected: Colors.SELECTED,
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
  })
)
