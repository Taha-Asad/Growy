import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ecommerce from "../../assets/ecommerce.jpg";
import { Link } from "react-router";

const Ecommerce = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }} // column on mobile, row on desktop
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "center" }}
          spacing={{ xs: 4, md: 0 }} // spacing between items on mobile
          sx={{
            textAlign: { xs: "center", md: "left" }, // center text on mobile
          }}
        >
          {/* Content Section (60%) */}
          <Box
            sx={{
              flexBasis: { md: "60%" },
              maxWidth: { md: "60%" },
              px: { xs: 2, md: 0 }, // horizontal padding on mobile
            }}
          >
            <Stack
              direction={"column"}
              spacing={2}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography
                fontSize={{ xs: "24px", md: "30px" }}
                fontWeight={700}
              >
                E-commerce Owner?
              </Typography>
              <Typography
                fontSize={{ xs: "16px", md: "20px" }}
                fontWeight={400}
                sx={{
                  width: { xs: "100%", md: "80%" }, // full width on mobile, 80% of 60% section on desktop
                }}
              >
                Optimize your business with smart asset management, growth
                strategies, and cutting-edge solutions to boost sales and
                efficiency with Growvy!
              </Typography>
              <Button
                component={Link}
                to={"/pricing"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                Plans
              </Button>
            </Stack>
          </Box>

          {/* Image Section (40%) */}
          <Box
            sx={{
              flexBasis: { md: "40%" },
              maxWidth: { md: "40%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={ecommerce}
              alt="E-commerce illustration"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "300px", // optional: limit height on large screens
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Ecommerce;
