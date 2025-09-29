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
import hiringImage from "../../assets/hiring.png";
import ecommerceImage from "../../assets/6.png";
import businessImage from "../../assets/business.jpg";

const PlansArray = [
  {
    title: "Basic CV Service",
    desc: "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
    price: ["Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly"],
    benefits: [
      "Companies Can access the database with monthly 200 Searches",
      "Manage Filters Like Skills, Cities, Experience etc",
      "Live chat experts help",
    ],
  },
  {
    title: "Lead Generating",
    desc: "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate's approach.",
    price: ["Price 50$ (6998 PKR) (50$ will apply per 20 Candidates)"],
    benefits: [
      "Companies Can create a job post on Growvy",
      "Manage Filters Like Skills, Cities, Experience etc",
      "Guide our Team to shortlist best candidates",
      "Live chat experts help",
    ],
  },
  {
    title: "Recruitment Specialist",
    desc: "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
    price: [
      "Price 40% of first Salary (For Experienced)",
      "(Can avail this package after one subscription)",
    ],
    benefits: [
      "Client can create a job post.",
      "Filters Like Skills, Cities, Exp etc",
      "Minor screening interview",
      "Whatsapp group with Team",
      "Complete A-Z hiring solution",
    ],
  },
];

const Plans = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 6 } }}>
      <Container>
        <Stack
          id="hiring-price"
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ pb: 4 }}
        >
          <Box
            component="img"
            src={hiringImage}
            width="15%"
            height="auto"
            sx={{ maxWidth: "200px" }} // prevent overflow on small screens
          />
          <Typography fontSize={{ xs: "28px", md: "40px" }} fontWeight={700}>
            Recruitment Solution
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "20px" }} textAlign="center">
            "Unlock seamless hiring with our tailored Recruitment Plans—flexible
            pricing designed to find your perfect talent, fast!"
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
                boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
              },
            }}
          >
            Plans
          </Button>

          {/* Cards Grid */}
          <Grid container spacing={4} justifyContent="center">
            {PlansArray.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 8, md: 4 }}>
                <Card
                  sx={{
                    minHeight: "570px",
                    maxHeight: "570px",
                    display: "flex",
                    flexDirection: "column",
                    borderImageSource:
                      "linear-gradient(135deg, #0d47a1 0%, #04AF09 50%, #ffeb3b 100%)",
                    borderImageSlice: 1,
                    borderImageWidth: "3px",
                    borderStyle: "solid",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent
                    sx={{
                      px: 3,
                      pt: 2,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Stack direction="column" spacing={1} textAlign="left">
                      <Typography fontWeight="bold" fontSize="20px">
                        {item.title}
                      </Typography>
                      <Typography fontSize="15px">{item.desc}</Typography>

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Service Cost
                      </Typography>
                      {item.price.map((line, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {line}
                        </Typography>
                      ))}

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Benefits
                      </Typography>
                      {item.benefits.map((benefit, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {benefit}
                        </Typography>
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      {/* Push button to bottom */}
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          color: "white",
                          width: "200px",
                          bgcolor: "#04AF09",
                          py: { xs: 1, md: 1.2 },
                          px: { xs: 3, md: 5 },
                          border: "1px solid #04AF09",
                          borderRadius: 50,
                          fontSize: { xs: "14px", md: "16px" },
                          fontWeight: 600,
                          alignSelf: "center",
                          mt: 2,
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
                        Start Today
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack
          id="ecommerce-price"
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ pb: 4 }}
        >
          <Box
            component="img"
            src={ecommerceImage}
            width="15%"
            height="auto"
            sx={{ maxWidth: "200px" }} // prevent overflow on small screens
          />
          <Typography fontSize={{ xs: "28px", md: "40px" }} fontWeight={700}>
            E-commerce Solutions{" "}
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "20px" }} textAlign="center">
            "Boost your online store with our E-commerce Plans—affordable
            pricing crafted to scale your business effortlessly!"
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
                boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
              },
            }}
          >
            Plans
          </Button>

          {/* Cards Grid */}
          <Grid container spacing={4} justifyContent="center">
            {PlansArray.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 8, md: 4 }}>
                <Card
                  sx={{
                    minHeight: "570px",
                    maxHeight: "570px",
                    display: "flex",
                    flexDirection: "column",
                    borderImageSource:
                      "linear-gradient(135deg, #0d47a1 0%, #04AF09 50%, #ffeb3b 100%)",
                    borderImageSlice: 1,
                    borderImageWidth: "3px",
                    borderStyle: "solid",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent
                    sx={{
                      px: 3,
                      pt: 2,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Stack direction="column" spacing={1} textAlign="left">
                      <Typography fontWeight="bold" fontSize="20px">
                        {item.title}
                      </Typography>
                      <Typography fontSize="15px">{item.desc}</Typography>

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Service Cost
                      </Typography>
                      {item.price.map((line, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {line}
                        </Typography>
                      ))}

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Benefits
                      </Typography>
                      {item.benefits.map((benefit, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {benefit}
                        </Typography>
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      {/* Push button to bottom */}
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          color: "white",
                          width: "200px",
                          bgcolor: "#04AF09",
                          py: { xs: 1, md: 1.2 },
                          px: { xs: 3, md: 5 },
                          border: "1px solid #04AF09",
                          borderRadius: 50,
                          fontSize: { xs: "14px", md: "16px" },
                          fontWeight: 600,
                          alignSelf: "center",
                          mt: 2,
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
                        Start Today
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack
          id="business-price"
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ pb: 4 }}
        >
          <Box
            component="img"
            src={businessImage}
            width="15%"
            height="auto"
            sx={{ maxWidth: "200px" }} // prevent overflow on small screens
          />
          <Typography fontSize={{ xs: "28px", md: "40px" }} fontWeight={700}>
            Business Solutions{" "}
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "20px" }} textAlign="center">
            "Boost your online store with our E-commerce Plans—affordable
            pricing crafted to scale your business effortlessly!"
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
                boxShadow: "0 4px 12px rgba(4,175,9,0.3)",
              },
            }}
          >
            Plans
          </Button>

          {/* Cards Grid */}
          <Grid container spacing={4} justifyContent="center">
            {PlansArray.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 8, md: 4 }}>
                <Card
                  sx={{
                    minHeight: "570px",
                    maxHeight: "570px",
                    display: "flex",
                    flexDirection: "column",
                    borderImageSource:
                      "linear-gradient(135deg, #0d47a1 0%, #04AF09 50%, #ffeb3b 100%)",
                    borderImageSlice: 1,
                    borderImageWidth: "3px",
                    borderStyle: "solid",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent
                    sx={{
                      px: 3,
                      pt: 2,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Stack direction="column" spacing={1} textAlign="left">
                      <Typography fontWeight="bold" fontSize="20px">
                        {item.title}
                      </Typography>
                      <Typography fontSize="15px">{item.desc}</Typography>

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Service Cost
                      </Typography>
                      {item.price.map((line, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {line}
                        </Typography>
                      ))}

                      <Typography fontWeight="bold" sx={{ mt: 2 }}>
                        Benefits
                      </Typography>
                      {item.benefits.map((benefit, i) => (
                        <Typography key={i} fontSize="15px" sx={{ pl: 2 }}>
                          • {benefit}
                        </Typography>
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      {/* Push button to bottom */}
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          color: "white",
                          width: "200px",
                          bgcolor: "#04AF09",
                          py: { xs: 1, md: 1.2 },
                          px: { xs: 3, md: 5 },
                          border: "1px solid #04AF09",
                          borderRadius: 50,
                          fontSize: { xs: "14px", md: "16px" },
                          fontWeight: 600,
                          alignSelf: "center",
                          mt: 2,
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
                        Start Today
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Plans;
