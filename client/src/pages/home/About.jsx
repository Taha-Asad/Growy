import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 4, md: 6 }, // responsive vertical padding
          px: { xs: 2, md: 4 }, // responsive horizontal padding
          position: "relative", // for absolute green bar
        }}
      >
        {/* Green Bar at Top Right */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "10px",
            bgcolor: "#04AF09",
            borderRadius: "4px",
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" }, // responsive text
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          “Growvy is built to streamline hiring, optimize assets, and drive
          business growth. Our mission is to create a tech-driven ecosystem
          where companies hire smarter, manage resources efficiently, and scale
          effortlessly. Whether you’re seeking top talent, asset solutions, or
          business expansion, Growvy is your trusted partner in success.”
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
