import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 14,
      fontFamily: "Share Tech Mono",
    },
    fontFamily: `"open sans", "Helvetica", "Arial", sans-serif`,
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: 300,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#FFFAFA",
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#fffaf9",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
