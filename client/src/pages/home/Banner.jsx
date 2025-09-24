import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 }, // responsive top & bottom padding
        px: { xs: 2, md: 4 }, // responsive left & right padding
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
        >
          <Typography
            fontSize={{ xs: "28px", sm: "36px", md: "50px" }}
            fontWeight={700}
            lineHeight={1.2}
          >
            Join Growvy's 50M+ Job Seeker <br /> Community & Get Hired Faster!
          </Typography>

          <Typography
            fontSize={{ xs: "16px", sm: "20px", md: "25px" }}
            width={{ xs: "100%", sm: "90%", md: "70%" }}
          >
            “Build your profile, get noticed by top employers, and access
            exclusive job opportunities tailored to your skills. Your next
            career move starts here!”
          </Typography>

          <Button
            sx={{
              textTransform: "capitalize",
              color: "white",
              width: { xs: "180px", md: "250px" }, // responsive button width
              bgcolor: "#04AF09",
              py: { xs: 1, md: 1.2 }, // responsive padding
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
            Sign In
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
