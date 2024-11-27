import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
  Box,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Email, LocationOn, GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

// Add this new import
import { AnimatedBackground } from "../components/AnimatedBackground";

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false); // For Snackbar
  const [charCount, setCharCount] = useState(0);

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (form.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (form.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Send form data
        });

        if (response.ok) {
          // Show success snackbar
          setOpenSnackbar(true);
          console.log("Form submitted successfully", await response.json());
          setForm({ name: "", email: "", message: "" }); // Reset form fields
          setErrors({ name: "", email: "", message: "" }); // Clear errors
        } else {
          const errorData = await response.json();
          console.error("Form submission failed", errorData);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar after a few seconds
  };

  useEffect(() => {
    setCharCount(form.message.length);
  }, [form.message]);

  return (
    <Card 
      sx={{ 
        maxWidth: 1200, 
        mx: "auto", 
        mt: 12, 
        mb: 12, 
        borderRadius: 4, 
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <AnimatedBackground />

      <Grid container sx={{ position: "relative", zIndex: 1 }}>
        {/* Left side - Contact Information */}
        <Grid item xs={12} md={5} 
          sx={{ 
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)",
            color: "white", 
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
              Get in Touch
            </Typography>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ color: "white", mr: 2 }}>
                <Email fontSize="large" />
              </IconButton>
              <Typography variant="body1">contact.ahmed.abdullahi@gmail.com</Typography>
            </Box>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ color: "white", mr: 2 }}>
                <LocationOn fontSize="large" />
              </IconButton>
              <Typography variant="body1">Seattle, WA</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ color: "white", bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }} href="https://github.com/yourusername" target="_blank">
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton sx={{ color: "white", bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }} href="https://linkedin.com/in/yourusername" target="_blank">
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Right side - Contact Form */}
        <Grid item xs={12} md={7}>
          <CardContent sx={{ p: 6, position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h3" gutterBottom align="left" fontWeight="bold" sx={{ mb: 4 }}>
                Send a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={form.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      variant="outlined"
                      value={form.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      error={!!errors.message}
                      helperText={errors.message || `${charCount}/500 characters`}
                      required
                      inputProps={{ maxLength: 500 }}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                    <LinearProgress 
                      variant="determinate" 
                      value={(charCount / 500) * 100} 
                      sx={{ mt: 1, height: 6, borderRadius: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: "right", mt: 2 }}>
                    <Button
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        py: 1.5,
                        px: 4,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        '&:hover': {
                          background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                          boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </motion.div>
          </CardContent>
        </Grid>
      </Grid>

      {/* Snackbar Component */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // This sets the position to top right
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ContactForm;
