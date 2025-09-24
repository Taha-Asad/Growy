import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import problemHiring from "../../assets/8.png";
import arrowguy from "../../assets/15.png";
import shapes from "../../assets/13.png";
import growy from "../../assets/14.png";
const Info = () => {
  const sections = [
    {
      title: "Problems in Hiring",
      description:
        "Companies spend high <b>$$$</b> budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient.",
      image: problemHiring,
      reverse: false, // content left, image right
    },
    {
      title: "With Growvy Solution",
      description:
        "With Growvy, businesses can access a database of active job seekers who have recently joined for job search.Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!",
      image: arrowguy, // replace with actual asset if available
      reverse: true, // image left, content right
    },
    {
      title: "E-commerce Business",
      description:
        "E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits.",
      image: shapes,
      reverse: false,
    },
    {
      title: "With Growvy Solution",
      description:
        "Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.",
      image: growy,
      reverse: true,
    },
  ];

  return (
    <Box
      sx={{ py: { xs: 4, md: 6 }, mt: { xs: 6, md: 10 }, mb: { xs: 5, md: 8 } }}
    >
      <Container>
        {sections.map((section, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", md: "row" }} // column on mobile, row on desktop
            spacing={{ xs: 2, md: 4 }} // less spacing on desktop to imply "flow"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mb: { xs: 6, md: 8 }, // space between sections
              flexDirection: {
                md: section.reverse ? "row-reverse" : "row", // alternate sides on desktop
              },
              textAlign: {
                xs: "center",
                md: section.reverse ? "right" : "left",
              }, // align text responsively
            }}
          >
            {/* Content */}
            <Stack
              direction="column"
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: "45%" }, // constrain width on desktop
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "40px" },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {section.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </Stack>

            {/* Image */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: "45%" },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: section.reverse ? "flex-start" : "flex-end",
                },
                mt: { xs: 2, md: 0 }, // margin-top only on mobile
              }}
            >
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "450px", // prevent oversized images
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
        ))}
      </Container>
    </Box>
  );
};

export default Info;
