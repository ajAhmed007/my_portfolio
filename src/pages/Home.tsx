import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiPython,
  SiTypescript,
  SiSpringboot,
  SiApachekafka,
  SiDocker,
  SiRedis,
  SiGit,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";
import { Helmet } from "react-helmet-async";
// src/pages/Home.tsx
import myPhoto from '../assets/images/ahmed-abdullahi.jpeg'; 
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 12 }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home | Ahmed Abdullahi Portfolio</title>
        <meta
          name="description"
          content="Welcome to Ahmed Abdullahi's professional portfolio. Discover my projects, skills, and experience in Full-Stack Development."
        />
      </Helmet>

      {/* Professional Photo */}
      <Avatar
        alt="Ahmed Abdullahi"
        src={myPhoto}
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          mb: 4,
          border: `4px solid ${theme.palette.primary.main}`,
          boxShadow: 2,
        }}
      />

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: theme.palette.mode === "light" ? "#000" : "#fff", // Dynamically set color
          }}
        >
          Hi, I'm Ahmed 👋
        </Typography>
      </motion.div>
      <Typography variant="h5" gutterBottom>
        Passionate Software Engineer specializing in Full-Stack Development
      </Typography>

      {/* Personal Branding Statement */}
      <Typography variant="body1" paragraph>
        I build scalable and efficient software solutions that drive business
        success.
      </Typography>

      {/* Call-to-Action Buttons */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/projects"
          sx={{ mr: 2 }}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/contact"
        >
          Contact Me
        </Button>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <IconButton
          href="https://www.linkedin.com/in/ahmedabdullahi/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            size={30}
            color={theme.palette.mode === "dark" ? "#ffffff" : "#0e76a8"}
          />
        </IconButton>
        <IconButton
          href="https://github.com/ajAhmed007"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub
            size={30}
            color={theme.palette.mode === "dark" ? "#ffffff" : "#000000"}
          />
        </IconButton>
      </Box>

      {/* Key Skills */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Technologies I Work With
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <SiTypescript size={40} style={{ margin: "0 10px" }} />
          <SiReact size={40} style={{ margin: "0 10px" }} />
          <SiNodedotjs size={40} style={{ margin: "0 10px" }} />
          <SiSpringboot size={40} style={{ margin: "0 10px" }} />
          <SiApachekafka size={40} style={{ margin: "0 10px" }} />
          <SiDocker size={40} style={{ margin: "0 10px" }} />
          <SiRedis size={40} style={{ margin: "0 10px" }} />
          <SiGit size={40} style={{ margin: "0 10px" }} />
          <SiPostgresql size={40} style={{ margin: "0 10px" }} />

          {/* Add more icons as needed */}
        </Box>
      </Box>

      {/* Testimonials */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          "An outstanding developer who consistently delivers high-quality
          work."
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          — John Doe, Senior Developer at TechCorp
        </Typography>
      </Box>

      {/* Client Logos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
          flexWrap: "wrap",
        }}
      ></Box>
    </Container>
  );
};

export default Home;
