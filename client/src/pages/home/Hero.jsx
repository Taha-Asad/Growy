import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import heroimage from "../../assets/0.png";

const Hero = () => {
  return (
    <Box
      sx={{
        mt: 6,
        position: "relative",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }} // responsive layout
          spacing={{ xs: 4, md: 0 }} // spacing when stacked
          alignItems="center"
        >
          {/* Left Content */}
          <Stack direction="column" spacing={1} alignItems="flex-start">
            <Typography
              component="h1"
              sx={{ fontSize: "50px", fontWeight: 700 }}
            >
              Maximize
            </Typography>

            {/* Line with "business efficiency" */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Wrap only "business" with ovals + 'with' */}
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Typography
                  component="span"
                  sx={{ fontSize: "50px", fontWeight: 700 }}
                >
                  business
                </Typography>

                {/* Inner Oval */}
                <svg
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                  }}
                  width="280"
                  height="120"
                >
                  <ellipse
                    cx="140"
                    cy="60"
                    rx="120"
                    ry="45"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                    strokeDasharray="500 50"
                    strokeDashoffset="50"
                  />
                </svg>

                {/* Outer Oval */}
                <svg
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                  }}
                  width="295"
                  height="135"
                >
                  <ellipse
                    cx="147"
                    cy="67"
                    rx="127"
                    ry="52"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                    strokeDasharray="500 45"
                    strokeDashoffset="50"
                  />
                </svg>

                {/* Word "with" */}
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "22px", md: "30px" },
                    fontWeight: 700,
                    position: "absolute",
                    top: "110%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    color: "#04AF09",
                  }}
                >
                  with
                </Typography>
              </Box>

              {/* "efficiency" stays outside, on the same line */}
              <Typography
                component="span"
                sx={{ fontSize: "50px", fontWeight: 700 }}
              >
                efficiency
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{ fontSize: "50px", fontWeight: 700, color: "#04AF09" }}
            >
              Growvy
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "20px", width: { xs: "100%", md: "40%" } }} // full width on small screens
            >
              Scale your company with tailored strategies, market insights and
              expert consulting
            </Typography>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "white",
                bgcolor: "#04AF09",
                py: 1,
                px: 4,
                border: "1px solid #04AF09",
                borderRadius: 50,
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  bgcolor: "white",
                  color: "#04AF09",
                  border: "1px solid #04AF09",
                },
              }}
            >
              Start today
            </Button>
          </Stack>

          {/* Right Image */}
          <Box sx={{ py: 10, textAlign: { xs: "center", md: "left" } }}>
            <img
              src={heroimage}
              alt="heroImage"
              style={{ maxWidth: "100%", height: "auto" }} // responsive image
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
