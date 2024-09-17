import React from "react";
import { Container, Grid, Typography, Avatar, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AboutTabs from "../components/AboutTabs";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/ahmed-abdullahi.jpeg";

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, pb: 6 }}>
      <Helmet>
        <title>About Me | Your Name</title>
      </Helmet>

      {/* Hero Section with Avatar */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #6200ea, #03dac6)",
          borderRadius: 2,
          p: 4,
          mb: 6,
          textAlign: "center",
        }}
      >
        <Avatar
          alt="Ahmed Abdullahi"
          src={myPhoto}
          sx={{ width: 150, height: 150, margin: "auto", mb: 4 }}
        />
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Hi, I'm [Your Name]
        </Typography>
        <Typography variant="h5" sx={{ color: "#eee" }}>
          Full-Stack Developer | Passionate about Web Technologies
        </Typography>
      </Box>

      {/* Animated About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I am a full-stack software engineer with a passion for building
              web applications that deliver seamless user experiences. I enjoy
              working with modern technologies like React, Node.js, and
              TypeScript. My journey in tech began when...
            </Typography>
            <Typography variant="body1" paragraph>
              Over the years, I have worked on various projects ranging from
              small business websites to large-scale enterprise applications.
            </Typography>
          </Grid>

          {/* Add Tabs with more interactive sections */}
          <Grid item xs={12} md={6}>
            <AboutTabs />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
