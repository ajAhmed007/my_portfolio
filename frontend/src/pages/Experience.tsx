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
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

// Helper function to calculate duration between two dates
const calculateDuration = (startDate: string, endDate: string = "Present") => {
  const start = dayjs(startDate);
  const end = endDate === "Present" ? dayjs() : dayjs(endDate);
  const diffYears = end.diff(start, "year");
  const diffMonths = end.diff(start, "month") % 12;

  if (diffYears === 0 && diffMonths === 0) return "Less than a month";
  if (diffYears === 0) return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  if (diffMonths === 0) return `${diffYears} year${diffYears > 1 ? "s" : ""}`;
  return `${diffYears} year${diffYears > 1 ? "s" : ""} and ${diffMonths} month${
    diffMonths > 1 ? "s" : ""
  }`;
};

const experiences = [
  {
    title: "Full-Stack Software Engineer at CoStar Group",
    startDate: "May 2023",
    endDate: "Present", // Dynamic
    description: `• Spearhead the development of full-stack solutions using React, Node.js, and TypeScript.
                  • Implement CI/CD pipelines, reducing deployment times by 30%.
                  • Collaborate with cross-functional teams to design user-centric features.`,
  },
  {
    title: "Software Engineer Intern at Target",
    startDate: "May 2022",
    endDate: "August 2022",
    description: `• Developed and optimized supply chain solutions using Java and Spring Boot.
                  • Automated reporting processes, reducing manual efforts by 40%.
                  • Conducted performance testing to ensure scalability for high-demand periods.`,
  },
  {
    title: "Software Developer at Cquest-IP",
    startDate: "September 2021",
    endDate: "May 2022",
    description: `• Contributed to the development of educational software for universities using Java.
                  • Enhanced user experience by implementing dynamic UI components in React.
                  • Collaborated with backend teams to integrate API functionalities.`,
  },
  {
    title: "Data Analyst Intern at Sunergy Systems",
    startDate: "June 2019",
    endDate: "September 2019",
    description: `• Analyzed large datasets to identify trends and improve business strategies.
                  • Developed dashboards using Python and Power BI to streamline reporting.
                  • Assisted in the optimization of solar energy prediction models.`,
  },
];

const Experience: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Helmet>
        <title>Experience | Hanrava Maqahid Portfolio</title>
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
                {exp.startDate} – {exp.endDate} (
                {calculateDuration(exp.startDate, exp.endDate)})
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
