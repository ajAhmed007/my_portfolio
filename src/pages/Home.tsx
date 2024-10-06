import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import myPhoto from "../assets/images/ahmed-abdullahi.jpeg";
import { motion } from "framer-motion";
import KeySkills from "../components/KeySkills";

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
        <meta
          name="keywords"
          content="Ahmed Abdullahi, Full-Stack Developer, React, TypeScript, Spring Boot, Software Engineer"
        />
      </Helmet>

      {/* Professional Photo */}
      <Avatar
        alt="Ahmed Abdullahi professional headshot"
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
            color: theme.palette.mode === "light" ? "#000" : "#fff",
            display: "inline-flex",
            alignItems: "center",
            "& .wave": {
              display: "inline-block",
              animation: "wave 2s infinite", // Apply the wave animation
              transformOrigin: "70% 70%", // Define where the wave originates
            },
            "@keyframes wave": {
              "0%": { transform: "rotate(0deg)" },
              "10%": { transform: "rotate(14deg)" },
              "20%": { transform: "rotate(-8deg)" },
              "30%": { transform: "rotate(14deg)" },
              "40%": { transform: "rotate(-4deg)" },
              "50%": { transform: "rotate(10deg)" },
              "60%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(0deg)" },
            },
          }}
        >
          Hi, I'm Ahmed <span className="wave">👋</span>
        </Typography>
      </motion.div>

      <Typography variant="h5" gutterBottom>
        Passionate Software Engineer specializing in Full-Stack Development
      </Typography>

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
          sx={{
            mr: 2,
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/contact"
          sx={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
              color: "white",
            },
          }}
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
          sx={{
            mx: 1,
            "&:hover": {
              color: "#005582", // This will change the color of the icon on hover
            },
          }}
        >
          <FaLinkedin
            size={35}
            color={theme.palette.mode === "dark" ? "#ffffff" : "#0e76a8"}
          />
        </IconButton>

        <IconButton
          href="https://github.com/ajAhmed007"
          target="_blank"
          aria-label="GitHub"
          sx={{
            mx: 1,
            "&:hover": {
              color: "#333", // Change the icon color on hover
            },
          }}
        >
          <FaGithub
            size={35}
            color={theme.palette.mode === "dark" ? "#ffffff" : "#000000"}
          />
        </IconButton>
      </Box>

      {/* Key Skills */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Technologies I Work With
        </Typography>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            {/* Tecchnologies I Work With*/}
            <KeySkills />
          </Box>
        </motion.div>
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
      >
        {/* Placeholder for Client Logos */}
      </Box>
    </Container>
  );
};

export default Home;
