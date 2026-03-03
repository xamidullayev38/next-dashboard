import Link from "next/link";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Fullscreen } from "@mui/icons-material";

const menu = [
  { label: "Dashboard", icon: <GridViewRoundedIcon />, href: "/" },
  { label: "Teams", icon: <GroupsRoundedIcon />, href: "/teams" },
  { label: "Employees", icon: <PersonOutlineRoundedIcon />, href: "/employees" },
  { label: "Projects", icon: <WorkOutlineRoundedIcon />, href: "/projects" },
  { label: "Meetings", icon: <HandshakeRoundedIcon />, href: "/meetings" },
  { label: "Tasks", icon: <TaskAltRoundedIcon />, href: "/tasks" },
  { label: "Settings", icon: <SettingsRoundedIcon />, href: "/settings" },
];

export default function Sidebar({ open }) {
  // const router = useRouter();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 260 : 80,
        "& .MuiDrawer-paper": {
          width: open ? 260 : 80,
          transition: "0.2s",
          overflowX: "hidden",
          borderRight: "1px solid #eee",
          p: 2,
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            bgcolor: "primary.main",
            borderRadius: 2,
          }}
        />
        {open && (
          <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
            Teamify
          </Typography>
        )}
      </Box>

      <List sx={{ p: 0 }}>
        {menu.map((item, i) => (
          <ListItemButton
            key={item.href}
            component={Button}
            // href={item.href}
            sx={{
              width: "100%",
              borderRadius: 1,
              mb: 1,
              justifyContent: open ? "flex-start" : "center",
              transition: "all 0.2s ease",
              color: "text.secondary",

              "&:hover": {
                bgcolor: "transparent",
              },
              "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-primary": {
                color: "primary.main",
              },

              "& a[aria-current='page']": {
                color: "primary.main",
                fontWeight: 600,
              },

              "& a[aria-current='page'] .MuiListItemIcon-root": {
                color: "primary.main",
              },
            }}
          >
            {" "}
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 0,
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
