import React from "react";
import Arrow from "../assets/arrow.png";
import { Box } from "@mui/material";
const PathArrow = () => {
  return (
    <Box
      component="img"
      src={Arrow}
      alt="arrow"
      sx={{
        mt: { xs: 4, md: 6 }, // responsive margin top
        width: { xs: "80%", sm: "60%", md: "50%" }, // responsive widths
        height: "auto", // keeps aspect ratio
        display: "block",
        mx: "auto", // center horizontally
      }}
    />
  );
};

export default PathArrow;
