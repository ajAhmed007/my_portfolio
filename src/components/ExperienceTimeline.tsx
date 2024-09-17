import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Work } from "@mui/icons-material";
import { Typography } from "@mui/material";

const experiences = [
  {
    title: "Software Engineer at ABC Corp",
    date: "2020 - Present",
    description: "Developed web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer at XYZ Ltd",
    date: "2018 - 2020",
    description: "Built responsive interfaces with React and Redux.",
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <Timeline position="alternate">
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Work />
            </TimelineDot>
            {index < experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {exp.date}
            </Typography>
            <Typography variant="body2">{exp.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
