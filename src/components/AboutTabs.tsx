// src/components/AboutTabs.tsx (Example of button hover effects and dynamic style)

import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import SkillsSection from "./SkillsSection";
import ExperienceTimeline from "./ExperienceTimeline";

const AboutTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{
          "& .MuiTab-root": {
            fontSize: "1.1rem",
            fontWeight: "500",
            transition: "0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Tab label="Biography" />
        <Tab label="Skills" />
        <Tab label="Experience" />
      </Tabs>

      {/* Biography Tab */}
      {value === 0 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Biography
          </Typography>
          <Typography variant="body1">
            I graduated with a degree in Computer Science and have been working
            in the tech industry for over 5 years...
          </Typography>
        </Box>
      )}

      {/* Skills Tab */}
      {value === 1 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <SkillsSection />
        </Box>
      )}

      {/* Experience Tab */}
      {value === 2 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          <ExperienceTimeline />
        </Box>
      )}
    </Box>
  );
};

export default AboutTabs;
