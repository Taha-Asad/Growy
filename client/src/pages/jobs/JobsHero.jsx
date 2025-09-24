import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const JobsHero = () => {
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
            Jobs
          </Typography>
          <Typography fontSize={"20x"}>
            "Join our team and shape the future—explore exciting career
            opportunities today!"
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default JobsHero;
