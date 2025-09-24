import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PricingHero = () => {
  return (
    <Box sx={{ mb: 10, display: "flex", flexDirection: "column" }}>
      <Stack
        direction={"column"}
        sx={{
          mt: 2,
          bgcolor: "#DCF4DD",
          height: "40vh",
          borderBottomRightRadius: "25%",
          borderBottomLeftRadius: "25%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography fontSize={"40px"} fontWeight={700}>
            Pricing
          </Typography>
          <Typography fontSize={"20x"}>
            "Discover flexible pricing plans tailored to your needs—start
            growing with us today!"{" "}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PricingHero;
