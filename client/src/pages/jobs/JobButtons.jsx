import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";

// Define categories
const categories = [
  "Tech",
  "Marketing & Sales",
  "Management",
  "Account & Finance",
  "Human Resources",
  "Customer Service",
];

const JobButtons = ({ onCategorySelect, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    // Toggle: if same category clicked, clear filter
    onCategorySelect(category === selectedCategory ? null : category);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            mt: { xs: 2, md: 5 },
          }}
        >
          {categories.map((category, index) => (
            <Grid
              item
              xs={6} // 2 per row on mobile
              sm={4} // 3 per row on tablet+
              md={4} // still 3 per row on desktop
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => handleCategoryClick(category)}
                sx={{
                  width: { xs: "140px", sm: "180px", md: "300px" }, // fixed width
                  height: { xs: "50px", sm: "56px", md: "60px" }, // fixed height
                  color: selectedCategory === category ? "white" : "#1A1A1A",
                  bgcolor:
                    selectedCategory === category ? "#04AF09" : "transparent",
                  border:
                    selectedCategory === category
                      ? "2px solid #04AF09"
                      : "2px solid #1A1A1A",
                  borderRadius: 50,
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === category ? "#038c07" : "#f5f5f5",
                    borderColor:
                      selectedCategory === category ? "#038c07" : "#000",
                  },
                }}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobButtons;
