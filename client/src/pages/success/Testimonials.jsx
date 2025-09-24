import React, { useState, useRef } from "react";
import Arrow from "../../assets/arrow.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Rating,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import image from "../../assets/testimonials.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Icons for navigation
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const testimonials = [
  { text: "Excellent Experience with Growvy.", rating: 5 },
  { text: "Growvy helped me get hired faster.", rating: 4.5 },
  { text: "Amazing platform for job seekers.", rating: 5 },
  { text: "User-friendly and effective.", rating: 4 },
  { text: "Best career decision ever!", rating: 5 },
  { text: "Highly recommend to everyone.", rating: 5 },
  { text: "Professional and reliable service.", rating: 4.5 },
  { text: "Changed my career for the better.", rating: 5 },
];

const GradientCard = ({ children }) => (
  <Box
    sx={{
      p: "3px",
      borderRadius: 3,
      background: "linear-gradient(135deg, darkblue, green, yellow)",
      height: "100%",
      position: "relative",
    }}
  >
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        position: "relative",
        overflow: "visible",
      }}
    >
      {children}
    </Card>
  </Box>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayRunning, setAutoplayRunning] = useState(true);
  const swiperRef = useRef(null);

  // Custom Continuous Dot Pagination - only show dots for each pair of cards
  const ContinuousDotPagination = ({ total, current }) => {
    const totalDots = Math.ceil(total / 2);

    return (
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        {Array.from({ length: totalDots }).map((_, index) => {
          const isActive = index === Math.floor(current / 2);

          return (
            <Box
              key={index}
              sx={{
                width: isActive ? "16px" : "10px",
                height: isActive ? "16px" : "10px",
                borderRadius: "50%",
                bgcolor: "#04AF09",
                opacity: isActive ? 1 : 0.5,
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(index * 2);
                  setAutoplayRunning(false);
                  setTimeout(() => setAutoplayRunning(true), 5000);
                }
              }}
            >
              {isActive && autoplayRunning && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "-2px",
                    left: "-2px",
                    right: "-2px",
                    bottom: "-2px",
                    border: "2px solid #04AF09",
                    borderRadius: "50%",
                    animation: "countdown 3s linear infinite",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Stack>
    );
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setAutoplayRunning(false);
      setTimeout(() => setAutoplayRunning(true), 5000);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setAutoplayRunning(false);
      setTimeout(() => setAutoplayRunning(true), 5000);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes countdown {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          position="relative"
        >
          {/* Image */}
          <Box
            component="img"
            src={image}
            sx={{
              width: { xs: "30%", md: "20%" },
              position: "absolute",
              top: { xs: "-10%", md: "-15%" },
              left: { xs: "5%", md: "15%" },
              zIndex: 1,
            }}
            alt="Decorative"
          />

          {/* Title */}
          <Typography
            fontSize={{ xs: "28px", sm: "36px", md: "50px" }}
            fontWeight={700}
            lineHeight={1.2}
            sx={{ mt: { xs: 4, md: 8 } }}
          >
            Join Growvy's 50M+ Job Seeker <br /> Community & Get Hired Faster!
          </Typography>

          <Typography
            fontSize={{ xs: "16px", sm: "20px", md: "25px" }}
            width={{ xs: "100%", sm: "90%", md: "90%" }}
          >
            "Build your profile, get noticed by top employers, and access
            exclusive job opportunities tailored to your skills. Your next
            career move starts here!"
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
            Sign In
          </Button>

          {/* Swiper Slider */}
          <Box sx={{ width: "100%", mt: 6, position: "relative" }}>
            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: { xs: "-10px", md: "-20px" },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": { bgcolor: "#04AF09", color: "white" },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: "-10px", md: "-20px" },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": { bgcolor: "#04AF09", color: "white" },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              slidesPerGroup={2}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              loop={true}
              autoplay={
                autoplayRunning
                  ? {
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              speed={600}
              style={{ padding: "20px 0", overflow: "visible" }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
                768: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2 },
                1024: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <GradientCard>
                    {/* Large Avatar covering entire top-left corner at border intersection */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-40px", // Positioned to cover the border corner
                        left: "-40px",
                        zIndex: 2,
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "white",
                        borderRadius: "50%",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        border: "4px solid",
                      }}
                    >
                      <AccountCircleIcon
                        sx={{
                          fontSize: 50,
                          color: "#04AF09",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 3, md: 4 },
                        pt: { xs: 6, md: 8 }, // Extra top padding for avatar space
                        minHeight: "220px", // Increased height to accommodate avatar
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": { transform: "translateY(-5px)" },
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                        mb={2}
                        fontWeight={500}
                        textAlign="center"
                        sx={{ mt: 1 }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Rating
                        value={testimonial.rating}
                        precision={0.5}
                        readOnly
                        sx={{
                          "& .MuiRating-iconFilled": { color: "#04AF09" },
                          "& .MuiRating-iconEmpty": {
                            color: "#04AF09",
                            opacity: 0.3,
                          },
                        }}
                      />
                    </CardContent>
                  </GradientCard>
                </SwiperSlide>
              ))}
            </Swiper>

            <ContinuousDotPagination
              total={testimonials.length}
              current={activeIndex}
            />
          </Box>
        </Stack>
      </Container>

      {/* Decorative arrow */}
      <Box
        component="img"
        src={Arrow}
        alt="arrow"
        sx={{
          mt: { xs: 4, md: 6 },
          width: { xs: "80%", sm: "60%", md: "50%" },
          height: "auto",
          display: "block",
          mx: "auto",
        }}
      />
    </Box>
  );
};

export default Testimonials;
