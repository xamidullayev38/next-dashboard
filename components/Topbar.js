// components/Topbar.js
import * as React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography, Avatar, Badge } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Topbar({ mode, setMode }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          px: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: 20, lineHeight: 1.2 }}>
            Good Morning Anima
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 13, mt: 0.4 }}>
            Hope you have a good day
          </Typography>
        </Box>

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* THEME TOGGLE */}
          <IconButton
            onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
            sx={{ color: "text.secondary" }}
          >
            {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>

          {/* SEARCH */}
          <IconButton sx={{ color: "text.secondary" }}>
            <SearchOutlinedIcon />
          </IconButton>

          {/* NOTIFICATION */}
          <IconButton sx={{ color: "text.secondary" }}>
            <Badge variant="dot" color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          {/* AVATAR */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 0.5 }}>
            <Avatar sx={{ width: 36, height: 36 }}>A</Avatar>
            <IconButton size="small" sx={{ color: "text.secondary" }}>
              <KeyboardArrowDownRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
