import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import React from "react";
import arrowUp from "../assets/growyArrow.png";
import { Link as RouterLink } from "react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Jobs", to: "/jobs" },
  { label: "Success", to: "/success" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

const Footer = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between" // keeps equal spacing
          alignItems="flex-start"
        >
          {/* Left Section */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize={{ xs: "28px", md: "35px" }}
                fontWeight={700}
              >
                Growvy
              </Typography>
              <Typography
                fontSize={{ xs: "16px", md: "20px" }}
                fontWeight={400}
                color="text.secondary"
              >
                Optimize your business with smart asset management, growth,
                strategies, and cutting edge solutions to boost sales and
                efficiency with Growvy!
              </Typography>
            </Stack>
          </Grid>

          {/* Center Section (Equidistant from Left & Right) */}
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack direction="column" spacing={2} alignItems="center">
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={index} sx={{ padding: "4px 0" }}>
                    <Link
                      component={RouterLink}
                      to={item.to}
                      underline="none"
                      color="black"
                      fontSize={{ xs: "16px", sm: "17px", md: "18px" }}
                      fontWeight={600}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#04AF09",
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Rating
                value={null}
                precision={0.5}
                readOnly
                sx={{
                  "& .MuiRating-iconEmpty": {
                    color: "#04AF09", // Empty star boundary
                  },
                }}
              />
            </Stack>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img
              src={arrowUp}
              alt="arrow"
              style={{ maxWidth: "200px", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 2,
            borderTop: "1px solid #eaeaea",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Growvy. All rights reserved.
          </Typography>
        </Box>
        ;
      </Container>
    </Box>
  );
};

export default Footer;
