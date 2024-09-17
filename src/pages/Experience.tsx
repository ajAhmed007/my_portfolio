import React from "react";
import { Container, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Work } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

const experiences = [
  {
    title: "Full-Stack Software Engineer at CoStar Group",
    date: "May 2023 – Present",
    description: "Developed intuitive full-stack solutions...",
  },
  {
    title: "Software Engineer Intern at Target",
    date: "May 2022 – August 2022",
    description:
      "Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions Collaborated on supply chain solutions ",
  },
  {
    title: "Software Developer at Cquest-IP",
    date: "September 2021 – May 2022",
    description: "Assisted in developing educational software...",
  },
  {
    title: "Data Analyst Intern at Sunergy Systems",
    date: "June 2019 – September 2019",
    description: "Assisted in developing educational software...",
  },
];

const Experience: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Helmet>
        <title>Experience | [Your Name] Portfolio</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
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
    </Container>
  );
};

export default Experience;
