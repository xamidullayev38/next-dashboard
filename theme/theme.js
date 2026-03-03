// theme/theme.js
import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#6C5CE7" },
      background: {
        default: mode === "light" ? "#F6F7FB" : "#0B1220",
        paper: mode === "light" ? "#FFFFFF" : "#0F172A",
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: ["Inter", "system-ui", "Arial"].join(","),
      h6: { fontWeight: 700 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
