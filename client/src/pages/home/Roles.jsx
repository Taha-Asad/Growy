import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import job from "../../assets/3.png";
import employer from "../../assets/1.png";
import eccommerceImage from "../../assets/2.png";
import business from "../../assets/business.jpg";
import { Link } from "react-router";
// RoleItem component
const RoleItem = ({ title, description, buttonText, image, reverse }) => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      direction={reverse ? "row-reverse" : "row"}
      sx={{
        my: 6,
        minHeight: { xs: "auto", md: "500px" }, // ensure proper height on larger screens
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack
          direction="column"
          spacing={4}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "90%" }, // responsive max width
            mx: { xs: 0, md: reverse ? 0 : "auto" }, // center content when not reversed
            ml: { md: reverse ? "auto" : 0 }, // adjust margin for reversed layout
            pr: { md: reverse ? 0 : 4 }, // padding for spacing
            pl: { md: reverse ? 4 : 0 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "35px" }, // responsive font size
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" }, // responsive font size
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          <Button
            component={Link}
            to={"/jobs"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              textTransform: "capitalize",
              color: "white",
              width: "fit-content",
              bgcolor: "#04AF09",
              py: { xs: 1, md: 1.5 }, // responsive padding
              px: { xs: 3, md: 4 },
              border: "1px solid #04AF09",
              borderRadius: 50,
              fontSize: { xs: "14px", md: "16px" }, // responsive font size
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
            {buttonText}
          </Button>
        </Stack>
      </Grid>

      {/* Image Section - 50% */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "400px" }, // responsive height
            display: "flex",
            alignItems: "center",
            // Conditional justification based on reverse prop
            justifyContent: {
              xs: "center", // center on mobile
              md: reverse ? "flex-start" : "flex-end", // left when reverse, right when normal
            },
            px: { xs: 2, md: 2 }, // reduced padding to allow more edge positioning
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              maxWidth: { xs: "280px", sm: "320px", md: "90%" }, // slightly reduced max width to allow edge positioning
              height: "auto",
              maxHeight: "100%",
              objectFit: "contain", // maintain aspect ratio
              borderRadius: 2, // optional: add border radius
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)", // subtle hover effect
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const Roles = () => {
  // Array of different content
  const rolesData = [
    {
      title: "I'm a Job Seeker!",
      description: "Looking for a job according to my skills and requirements.",
      buttonText: "Start today",
      image: job,
    },
    {
      title: "I'm an Employer!",
      description: "Looking for talented candidates for my company.",
      buttonText: "Post Job",
      image: employer,
    },
    {
      title: "I'm an E-commerce Store!",
      description: "Looking for potential sales data for sales campaigns.",
      buttonText: "Sales Data",
      image: eccommerceImage,
    },
    {
      title: "I'm a Business!",
      description: "Looking for CRM or Data resources to boost my business.",
      buttonText: "Business plans",
      image: business,
    },
  ];

  return (
    <Box>
      <Container>
        {rolesData.map((role, index) => (
          <RoleItem
            key={index}
            {...role}
            reverse={index % 2 !== 0} // alternate layout
          />
        ))}
      </Container>
    </Box>
  );
};

export default Roles;
