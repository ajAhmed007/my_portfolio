import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";

const skills = {
  programmingLanguages: [
    "Java",
    "TypeScript",
    "JavaScript",
    "C#",
    "Python",
    "Go",
  ],
  frameworks: [
    "React",
    "Redux",
    "Spring Boot",
    "Node.js",
    "ASP.NET Core",
    "Tailwind CSS",
    "Material UI",
  ],
  tools: [
    "Docker",
    "Kubernetes",
    "Azure DevOps",
    "Git",
    "Jenkins",
    "PostgreSQL",
    "Redis",
  ],
  methodologies: [
    "Agile",
    "Scrum",
    "TDD",
    "CI/CD",
    "REST API Design",
    "Microservices Architecture",
  ],
};

const SkillsSection: React.FC = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Programming Languages
      </Typography>
      <Grid container spacing={1}>
        {skills.programmingLanguages.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} variant="outlined" color="primary" />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Frameworks & Libraries
      </Typography>
      <Grid container spacing={1}>
        {skills.frameworks.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} variant="outlined" color="secondary" />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Tools & Technologies
      </Typography>
      <Grid container spacing={1}>
        {skills.tools.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} variant="outlined" color="success" />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Methodologies & Practices
      </Typography>
      <Grid container spacing={1}>
        {skills.methodologies.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} variant="outlined" color="info" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
