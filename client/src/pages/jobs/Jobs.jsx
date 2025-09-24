import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Paper,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";

// Enhanced job data with categories
const jobsArray = [
  { title: "Business Developer", category: "Management" },
  { title: "Finance Manager", category: "Account & Finance" },
  { title: "Human Resource Manager", category: "Human Resources" },
  { title: "Software Engineer", category: "Tech" },
  { title: "Web Developer", category: "Tech" },
  { title: "Graphic Designer / Ui / Ux", category: "Tech" },
  { title: "SEO Expert", category: "Marketing & Sales" },
  { title: "Android Developer", category: "Tech" },
  { title: "Floor Manager", category: "Management" },
  { title: "Sales Representative", category: "Marketing & Sales" },
  { title: "Data Entry Operator", category: "Account & Finance" },
  { title: "Delivery Man", category: "Customer Service" },
  { title: "Urdu / English Call Center Agent", category: "Customer Service" },
  { title: "Morning Shift Jobs for Females", category: "Customer Service" },
  { title: "Accountant", category: "Account & Finance" },
];

const Jobs = ({ selectedCategory }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = selectedCategory
    ? jobsArray.filter((job) => job.category === selectedCategory)
    : jobsArray;

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedJob(null);
  };

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container>
        <Stack direction="column" textAlign="center" spacing={4}>
          <Typography
            fontSize={{ xs: "28px", sm: "36px", md: "50px" }}
            fontWeight={700}
            lineHeight={1.2}
          >
            Top Jobs
          </Typography>

          {filteredJobs.length > 0 ? (
            <Box>
              {filteredJobs.map((item, index) => (
                <Paper
                  key={index}
                  sx={{
                    border: "2px solid #1A1A1A",
                    borderRadius: 50,
                    py: 2,
                    px: { xs: 2, md: 3 },
                    mt: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "center", sm: "center" },
                    gap: 2,
                  }}
                >
                  <Typography
                    fontSize={{ xs: "16px", md: "20px" }}
                    fontWeight={700}
                    sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}
                  >
                    {item.title}
                  </Typography>
                  <Button
                    onClick={() => handleOpenModal(item)}
                    sx={{
                      textTransform: "capitalize",
                      color: "white",
                      width: "180px",
                      maxWidth: { md: "250px" },
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
                    Apply Now
                  </Button>
                </Paper>
              ))}
            </Box>
          ) : (
            <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
              No jobs found in this category. Try another!
            </Typography>
          )}
        </Stack>

        {/* MODAL */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="job-modal-title"
          aria-describedby="job-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Paper
            sx={{
              width: { xs: "100%", sm: "500px" },
              maxHeight: "90vh",
              overflowY: "auto",
              p: 4,
              borderRadius: 4,
              position: "relative",
              bgcolor: "background.paper",
              boxShadow: 24,
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "#04AF09",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              id="job-modal-title"
              variant="h5"
              fontWeight={700}
              sx={{ mb: 3, color: "#04AF09" }}
            >
              Apply for Position
            </Typography>

            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              {selectedJob?.title}
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              Thank you for your interest in this role. Please prepare your CV
              and cover letter. Our team will review your application and
              contact you within 3–5 business days.
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, fontStyle: "italic" }}>
              *Ensure your contact information is up to date in your profile.
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
              <Button
                variant="outlined"
                onClick={handleCloseModal}
                sx={{
                  borderColor: "#04AF09",
                  color: "#04AF09",
                  "&:hover": {
                    bgcolor: "#E8F5E9",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#04AF09",
                  "&:hover": {
                    bgcolor: "#038c07",
                  },
                }}
                onClick={() => {
                  toast.success(
                    `Application submitted for: ${selectedJob?.title}`
                  );
                  handleCloseModal();
                }}
              >
                Submit Application
              </Button>
            </Stack>
          </Paper>
        </Modal>
      </Container>
    </Box>
  );
};

export default Jobs;
