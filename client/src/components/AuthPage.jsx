// src/pages/AuthPage.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const AuthPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp((prev) => !prev);

  return (
    <Box
      sx={{
        minHeight: "100vh", // full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2, // small horizontal padding for mobile
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            fontSize={{ xs: "24px", md: "32px" }}
            fontWeight={700}
            mb={2}
          >
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </Typography>

          <Typography
            fontSize={{ xs: "14px", md: "16px" }}
            color="text.secondary"
            mb={4}
          >
            {isSignUp
              ? "Sign up to explore jobs and opportunities"
              : "Sign in to access your account"}
          </Typography>

          <Stack spacing={2}>
            {isSignUp && (
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
              />
            )}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            {isSignUp && (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            )}

            <Button
              variant="contained"
              sx={{
                bgcolor: "#04AF09",
                py: 1.2,
                borderRadius: 50,
                fontWeight: 600,
                "&:hover": { bgcolor: "#038c07" },
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Stack>

          <Typography mt={3} fontSize="14px">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <Button
              onClick={handleToggle}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthPage;
