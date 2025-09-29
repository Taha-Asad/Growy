import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import business from "../../assets/business.jpg";
import ecommerce from "../../assets/6.png";
import hiring from "../../assets/hiring.png";

const ServiceHero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden", // prevent horizontal scroll
      }}
    >
      {/* Top Banner */}
      <Stack
        direction="column"
        sx={{
          mt: 2,
          bgcolor: "#DCF4DD",
          height: { xs: "auto", md: "40vh" }, // adjust height for mobile
          borderBottomRightRadius: "25%",
          borderBottomLeftRadius: "25%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 4, md: 0 },
        }}
      >
        <Box>
          <Typography fontSize={{ xs: "28px", md: "40px" }} fontWeight={700}>
            Services
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "20px" }}>
            At Growvy, we provide innovative, cost-effective solutions to help
            businesses and professionals thrive.
          </Typography>
        </Box>
      </Stack>

      {/* Service Cards */}
      <Container sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems={"center"}
        >
          {/* Hiring */}
          <Grid size={{ xs: 12, sm: 8, md: 4 }}>
            <Stack alignItems="center" spacing={3}>
              {/* Responsive Image */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: {
                    xs: "none",
                    md: "translateY(30%)",
                  },
                  mb: { xs: 0, md: -6 },
                }}
              >
                <img
                  src={hiring}
                  alt="hiring"
                  style={{
                    width: "60%", // relative scaling
                    maxWidth: "220px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Card */}
              <Card
                sx={{
                  minHeight: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: "1px solid black",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight="bold">Hiring</Typography>
                  <Typography>
                    Access a vast talent pool to hire the right candidates
                    quickly and affordably.
                  </Typography>
                </CardContent>
              </Card>

              {/* Button */}
              <Button
                component={"a"}
                href="/pricing#hiring-price"
                onClick={() => {
                  const section = document.getElementById("hiring-price");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
                    boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
                  },
                }}
              >
                Plans
              </Button>
            </Stack>
          </Grid>

          {/* E-commerce */}
          <Grid size={{ xs: 12, sm: 8, md: 4 }}>
            <Stack alignItems="center" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: {
                    xs: "none",
                    md: "translateY(30%)",
                  },
                  mb: { xs: 0, md: -6 },
                }}
              >
                <img
                  src={ecommerce}
                  alt="ecommerce"
                  style={{
                    width: "60%",
                    maxWidth: "200px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Card
                sx={{
                  minHeight: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: "1px solid black",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight="bold">E-commerce</Typography>
                  <Typography>
                    Drive expansion with targeted strategies and market-driven
                    solutions.
                  </Typography>
                </CardContent>
              </Card>

              <Button
                component={"a"}
                href="/pricing#ecommerce-price"
                onClick={() => {
                  const section = document.getElementById("hiring-price");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
                    boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
                  },
                }}
              >
                Plans
              </Button>
            </Stack>
          </Grid>

          {/* Business */}
          <Grid size={{ xs: 12, sm: 8, md: 4 }}>
            <Stack alignItems="center" spacing={3} sx={{ mt: "-32px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: {
                    xs: "none",
                    md: "translateY(30%)",
                  },
                  mb: { xs: 0, md: -6 },
                }}
              >
                <img
                  src={business}
                  alt="business"
                  style={{
                    width: "65%",
                    maxWidth: "220px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Card
                sx={{
                  minHeight: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: "1px solid black",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight="bold">Business</Typography>
                  <Typography>
                    Optimize and manage business resources with data-backed
                    insights.
                  </Typography>
                </CardContent>
              </Card>

              <Button
                component={"a"}
                href="/pricing#business-price"
                onClick={() => {
                  const section = document.getElementById("hiring-price");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
                    boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
                  },
                }}
              >
                Plans
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceHero;
