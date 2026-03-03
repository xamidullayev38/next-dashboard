// pages/_app.js
// import "@/styles/globals.css";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "@/theme/theme";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState("light");
  const theme = React.useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}
