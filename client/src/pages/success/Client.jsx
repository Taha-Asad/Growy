import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import echo from "../../assets/10.png";
import easypaisa from "../../assets/13.jpg";
import bird from "../../assets/11.png";
import motive from "../../assets/12.png";

const Client = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 1 } }}>
      <Container>
        {/* Heading + Button */}
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mb: { xs: 4, md: 2 }, textAlign: "center" }}
        >
          <Typography
            sx={{ fontSize: { xs: "28px", md: "40px" }, fontWeight: 700 }}
          >
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

        {/* Logos Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Echo */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }} item>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={echo}
                alt="echo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* Easypaisa */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }} item>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={easypaisa}
                alt="easypaisa"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* Bird */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }} item>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={bird}
                alt="bird"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* Motive → Circle */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }} item>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={motive}
                alt="motive"
                style={{
                  width: "150px", // fixed equal sides for circle
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%", // perfect circle
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Client;
