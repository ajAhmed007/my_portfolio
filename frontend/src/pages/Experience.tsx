import React, { useState, useCallback } from "react";
import { Container, Typography, Box, Grid, Paper, Chip, TextField, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Work } from '@mui/icons-material';
import { Search } from '@mui/icons-material';

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
    endDate: "Present",
    description: `• Architected and implemented scalable full-stack solutions using React, Node.js, and TypeScript, resulting in a 25% increase in application performance.
                  • Engineered and optimized CI/CD pipelines, reducing deployment times by 40% and improving overall team productivity.
                  • Collaborated with cross-functional teams to design and deliver user-centric features, increasing user engagement by 30%.
                  • Mentored junior developers, leading to a 20% improvement in team code quality and consistency.`,
    skills: ["React", "Node.js", "TypeScript", "CI/CD"],
  },
  {
    title: "Software Engineer Intern at Target",
    startDate: "May 2022",
    endDate: "August 2022",
    description: `• Developed and optimized supply chain solutions using Java and Spring Boot, improving inventory tracking accuracy by 15%.
                  • Designed and implemented automated reporting processes, reducing manual efforts by 50% and increasing data accuracy.
                  • Conducted comprehensive performance testing, ensuring scalability for high-demand periods and improving system uptime by 10%.
                  • Participated in Agile development processes, contributing to sprint planning and daily stand-ups.`,
    skills: ["Java", "Spring Boot"],
  },
  {
    title: "Software Developer at Cquest-IP",
    startDate: "September 2021",
    endDate: "May 2022",
    description: `• Spearheaded the development of educational software for universities, leveraging Java to create robust backend systems.
                  • Enhanced user experience by implementing dynamic UI components in React, resulting in a 40% increase in user satisfaction.
                  • Collaborated with backend teams to integrate API functionalities, improving data retrieval speed by 30%.
                  • Implemented unit and integration tests, increasing code coverage by 25% and reducing bug incidents by 20%.`,
    skills: ["Java", "React"],
  },
  {
    title: "Data Analyst Intern at Sunergy Systems",
    startDate: "June 2019",
    endDate: "September 2019",
    description: `• Analyzed large datasets using Python and SQL to identify trends, resulting in a 15% improvement in business strategy effectiveness.
                  • Developed interactive dashboards using Python and Power BI, streamlining reporting processes and reducing report generation time by 60%.
                  • Assisted in the optimization of solar energy prediction models, improving accuracy by 12% and contributing to more efficient resource allocation.
                  • Presented data-driven insights to senior management, influencing key business decisions.`,
    skills: ["Python", "SQL"],
  },
];

const Experience: React.FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredExperiences = experiences.filter(exp =>
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h4" gutterBottom component="h1" align="center" mb={4} fontWeight="bold">
        Professional Journey
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2
      }}>
        <TextField
          placeholder="Search experiences or skills"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: <Search color="action" sx={{ mr: 1 }} />,
          }}
          sx={{ 
            flex: 1,
            maxWidth: { xs: '100%', sm: '60%' },
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={() => {/* Implement download functionality */}}
          sx={{ 
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
            py: 1,
            minWidth: 180,
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
            },
          }}
        >
          Download Resume
        </Button>
      </Box>
      <Timeline position="alternate" sx={{ p: 0 }}>
        {filteredExperiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" sx={{ my: 0.5 }}>
                <Work fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Paper 
                  elevation={2}
                  sx={{ 
                    p: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      backgroundColor: theme.palette.primary.main,
                    },
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <Box sx={{ pl: 1, textAlign: 'left' }}>
                    <Typography variant="h6" component="h2" gutterBottom fontWeight="bold" color="primary">
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      {exp.startDate} – {exp.endDate} • {calculateDuration(exp.startDate, exp.endDate)}
                    </Typography>
                    <Box sx={{ mt: 1, mb: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {exp.skills.map((skill, i) => (
                        <Chip key={i} label={skill} size="small" />
                      ))}
                    </Box>
                    <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0 }}>
                      {exp.description.split('\n').map((item, i) => (
                        <Box component="li" key={i} sx={{ mb: 0.5 }}>
                          <Typography variant="body2" align="left">{item.trim().replace('• ', '')}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience;
