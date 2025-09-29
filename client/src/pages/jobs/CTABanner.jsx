import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import job from "../../assets/3.png";
import { Link } from "react-router";

const CTABanner = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      {" "}
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 10, md: 5 }}
          sx={{ mt: { xs: 6, md: 10 } }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              pt: { md: 10 },
              mb: { sm: 100 },
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
              spacing={2}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "28px", sm: "32px", md: "35px" },
                  lineHeight: 1.2,
                }}
              >
                I’m a Job Seeker!
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Looking for job according to my skills and requirements.
              </Typography>
              <Button
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
                Jobs
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 5, md: 0 },
            }}
          >
            <Box
              component="img"
              src={job}
              width="300px"
              height="auto"
              sx={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTABanner;
