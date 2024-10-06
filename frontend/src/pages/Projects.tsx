import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
} from "@mui/material";

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
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                borderRadius: "12px",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ borderRadius: "12px 12px 0 0" }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>

                {/* Technologies used */}
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      variant="outlined"
                      sx={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  sx={{
                    mx: "auto", // Center the button
                    mb: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
