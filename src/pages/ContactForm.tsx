import React, { useState } from "react";
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
} from "@mui/material";
import { Email, LocationOn } from "@mui/icons-material";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); // For Snackbar

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setOpenSnackbar(true); // Open Snackbar on successful submit
      console.log(form);
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar after a few seconds
  };

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", mt: 12, boxShadow: 5 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Contact Me
        </Typography>

        {/* {submitted && (
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "green", mb: 3 }}
          >
            Thank you for your message! I'll get back to you soon.
          </Typography>
        )} */}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
                helperText={errors.message}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  background: "linear-gradient(45deg, #6200ea, #03dac6)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(45deg, #6200ea, #ff4081)",
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <IconButton>
              <Email sx={{ fontSize: 40, color: "primary.main" }} />
            </IconButton>
            <Typography variant="body1">your.email@example.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <IconButton>
              <LocationOn sx={{ fontSize: 40, color: "primary.main" }} />
            </IconButton>
            <Typography variant="body1">Seattle, WA</Typography>
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
      </CardContent>
    </Card>
  );
};

export default ContactForm;
