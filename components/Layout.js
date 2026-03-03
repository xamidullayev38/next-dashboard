// components/Layout.js
import * as React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children, mode, setMode }) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar open={open} />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar
          open={open}
          onToggleSidebar={() => setOpen((p) => !p)}
          mode={mode}
          setMode={setMode}
        />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: { xs: 2, md: 3 },
            pt: { xs: 2, md: 3 },
            maxWidth: "100%",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
