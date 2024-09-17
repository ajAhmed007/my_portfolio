import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ProjectCard: React.FC = () => (
  <Card
    sx={{
      maxWidth: 345,
      mx: "auto",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image="/assets/images/project-thumbnail.jpg"
      alt="Project Thumbnail"
    />
    <CardContent>
      <Typography gutterBottom variant="h5">
        Project Title
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A short description of the project goes here. Explain the technologies
        used and the key features.
      </Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
