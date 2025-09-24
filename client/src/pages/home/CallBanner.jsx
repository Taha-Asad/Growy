import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import laptopguy from "../../assets/4.png";

const CallBanner = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }} // Stack vertically on mobile, row on desktop
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 4, md: 0 }} // Vertical spacing on mobile only
        sx={{
          textAlign: { xs: "center", md: "left" }, // Center-align text/buttons on mobile
        }}
      >
        {/* Image Section (60%) */}
        <Box
          sx={{
            flexBasis: { md: "60%" },
            maxWidth: { md: "60%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, md: 0 }, // Horizontal padding on mobile
            transform: "scaleX(-1)",
          }}
        >
          <img
            src={laptopguy}
            alt="Laptop guy illustration"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "350px", // Optional: prevent huge images on large screens
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Content Section (40%) */}
        <Box
          sx={{
            flexBasis: { md: "40%" },
            maxWidth: { md: "40%" },
            px: { xs: 2, md: 0 }, // Padding on mobile
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems={{ xs: "center", md: "flex-start" }} // Center on mobile, left-align on desktop
          >
            <Button
              sx={{
                textTransform: "capitalize",
                color: "white",
                width: { xs: "180px", md: "250px" },
                bgcolor: "#04AF09",
                py: { xs: 1, md: 1.2 },
                px: { xs: 3, md: 4 },
                border: "1px solid #04AF09",
                borderRadius: 50,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "white",
                  color: "#04AF09",
                  border: "1px solid #04AF09",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(4, 175, 9, 0.3)",
                },
              }}
            >
              Schedule Call Now
            </Button>
            <Typography
              fontSize={{ xs: "16px", md: "20px" }}
              fontWeight={400}
              sx={{
                width: { xs: "100%", md: "90%" }, // Full width on mobile, constrained on desktop
              }}
            >
              Join over 10k users worldwide. Start scheduling in less than 1
              minute.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CallBanner;
