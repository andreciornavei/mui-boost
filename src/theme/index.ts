import { createTheme } from "@mui/material";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { Select } from "./Select";
import { TextField } from "./TextField";

export const theme = createTheme({
  typography: {
    h1: {
      fontWeight: "bold",
      letterSpacing: 0,
      fontSize: "40px",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: -1,
      fontSize: "32px",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: 0,
      fontSize: "24px",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: 0,
      fontSize: "18px",
    },
  },
  palette: {
    primary: {
      contrastText: "#ffffff",
      light: "#6FC9FB",
      dark: "#353ED8",
      main: "#4070F4",
    },
    secondary: {
      contrastText: "#ffffff",
      light: "#F2F2F5",
      dark: "#01012E",
      main: "#00000E",
    },
    muted: {
      main: "#6D7994",
      hint: "#B6BCC9",
      dark: "#121722",
      light: "#F8F8FA",
    },
    gray: {
      dark: "#2F2D2E",
      main: "#E9E4E6",
      light: "#FEFEFE",
    },
  },
});

export const MuiBoostTheme = createTheme(theme, {
  components: {
    ...TextField,
    ...Button,
    ...Menu,
    ...Select,
  },
});
