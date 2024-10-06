import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

interface Skill {
  name: string;
  level: number; // Level from 0 to 100
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  // Add more skills as needed
];

const SkillsSection: React.FC = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle1">{skill.name}</Typography>
          <LinearProgress variant="determinate" value={skill.level} />
        </Box>
      ))}
    </Box>
  );
};

export default SkillsSection;
