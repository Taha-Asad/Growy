import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import heroimage from "../../assets/0.png";
import { Link as RouterLink } from "react-router";

const Hero = () => {
  return (
    <Box
      sx={{
        mt: 6,
        px: { xs: 2, sm: 3, md: 0 }, // ✅ side padding only on small screens
        position: "relative",
        overflow: "hidden", // ✅ stop ellipses from overflowing container
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 0 }}
          alignItems="center"
        >
          {/* Left Content */}
          <Stack direction="column" spacing={1} alignItems="flex-start">
            <Typography
              component="h1"
              sx={{ fontSize: { xs: "36px", md: "50px" }, fontWeight: 700 }}
            >
              Maximize
            </Typography>

            {/* Line with "business efficiency" */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* special oval highlight wrapping "business" */}
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Typography
                  component="span"
                  sx={{ fontSize: { xs: "36px", md: "50px" }, fontWeight: 700 }}
                >
                  business
                </Typography>

                {/* Inner Oval (responsive) */}
                <Box
                  component="svg"
                  viewBox="0 0 280 120"
                  sx={{
                    width: { xs: "140px", sm: "200px", md: "280px" },
                    height: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                  }}
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
                </Box>

                {/* Outer Oval (responsive) */}
                <Box
                  component="svg"
                  viewBox="0 0 295 135"
                  sx={{
                    width: { xs: "150px", sm: "220px", md: "295px" },
                    height: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                  }}
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
                </Box>

                {/* Word "with" */}
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "18px", sm: "24px", md: "30px" },
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

              {/* efficiency */}
              <Typography
                component="span"
                sx={{ fontSize: { xs: "36px", md: "50px" }, fontWeight: 700 }}
              >
                efficiency
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "36px", md: "50px" },
                fontWeight: 700,
                color: "#04AF09",
              }}
            >
              Growvy
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "20px", width: { xs: "100%", md: "40%" } }}
            >
              Scale your company with tailored strategies, market insights and
              expert consulting.
            </Typography>
            <Button
              component={RouterLink}
              to={"/pricing"}
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
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
