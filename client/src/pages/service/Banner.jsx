import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Container>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: "40px", fontWeight: 700 }}>
            Join over 10k users worldwide
          </Typography>
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
            View Pricing
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
