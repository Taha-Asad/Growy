import React, { useState } from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/", icon: <HomeIcon /> },
    { label: "Jobs", to: "/jobs", icon: <WorkIcon /> },
    { label: "Success", to: "/success", icon: <EmojiEventsIcon /> },
    { label: "Services", to: "/services", icon: <MiscellaneousServicesIcon /> },
    { label: "Pricing", to: "/pricing", icon: <AttachMoneyIcon /> },
  ];

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            border: "2px solid black",
            borderRadius: 50,
            py: { xs: 2, sm: 3, md: 5 },
            px: { xs: 3, sm: 5, md: 8 },
            mx: "auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3, md: 5 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                underline="none"
                color="black"
                fontSize={{ xs: "16px", sm: "17px", md: "18px" }}
                fontWeight={600}
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer (Mobile Menu) */}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: { width: "70%", maxWidth: 280, p: 2 },
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "black",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
