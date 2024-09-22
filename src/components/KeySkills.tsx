import React from "react";
import { Tooltip, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiApachekafka,
  SiDocker,
  SiRedis,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

// Array of technologies with their respective names and icons
const technologies = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Docker", icon: SiDocker },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: SiGit },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const KeySkills: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 2,
      }}
    >
      {technologies.map((tech, index) => (
        <Tooltip title={tech.name} key={index}>
          <motion.div whileHover={{ scale: 1.1 }} style={{ margin: "0 10px" }}>
            <tech.icon size={40} />
          </motion.div>
        </Tooltip>
      ))}
    </Box>
  );
};

export default KeySkills;
