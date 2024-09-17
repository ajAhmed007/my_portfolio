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
  Grid2,
} from "@mui/material";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/assets/images/project-one.jpg",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/yourusername/project-one",
  },
  // Add more projects
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid2 container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Technologies: {project.technologies.join(", ")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
