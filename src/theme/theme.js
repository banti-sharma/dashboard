import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  spacing: 6,
  typography: {
    button: {
      textTransform: "none",
    },
    fontSize: 13,
    shape: { borderRadius: 2 },
  },
  palette: {
    mode: "light"
  }
});

export default theme;
