import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SuccessHero = () => {
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
            Success
          </Typography>
          <Typography fontSize={"20x"}>
            "Discover inspiring Success Stories—see how our solutions empower
            businesses to thrive!"{" "}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default SuccessHero;
