import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One, highlighting the core functionalities and purpose of the project.",
    image: "/assets/images/project-one.jpg",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two, focusing on its innovative solution using modern technology.",
    image: "/assets/images/project-two.jpg",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A brief description of Project Three, designed to optimize backend services using microservices architecture.",
    image: "/assets/images/project-three.jpg",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/yourusername/project-three",
  },
  {
    title: "Project Four",
    description:
      "A mobile application built with Flutter, focused on providing a seamless user experience.",
    image: "/assets/images/project-four.jpg",
    technologies: ["Flutter", "Dart"],
    link: "https://github.com/yourusername/project-four",
  },
  {
    title: "Project Five",
    description:
      "A machine learning project focused on predictive analysis using neural networks.",
    image: "/assets/images/project-five.jpg",
    technologies: ["Python", "TensorFlow", "Keras"],
    link: "https://github.com/yourusername/project-five",
  },
  {
    title: "Project Six",
    description:
      "A machine learning project focused on predictive analysis using neural networks.",
    image: "/assets/images/project-five.jpg",
    technologies: ["Python", "TensorFlow", "Keras"],
    link: "https://github.com/yourusername/project-six",
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          fontWeight: 800,
          textAlign: "center",
          mb: 8,
          fontSize: isMobile ? "2.5rem" : "3.5rem",
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    borderColor: theme.palette.primary.main,
                  },
                  border: `1px solid ${theme.palette.grey[300]}`,
                }}
              >
                <Box
                  sx={{
                    height: '200px',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: theme.palette.primary.light,
                          color: theme.palette.primary.contrastText,
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
