import React from "react";
import { Box, Container, Typography, useTheme, Grid, Paper, Chip, Avatar, Divider, IconButton } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/ahmed-abdullahi.jpeg";
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const About: React.FC = () => {
  const theme = useTheme();

  const SkillChip = ({ skill }: { skill: string }) => (
    <Chip
      label={skill}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: theme.palette.common.white,
        fontWeight: 'bold',
        borderRadius: '16px',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
        transition: 'all 0.3s ease',
      }}
    />
  );

  const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {React.cloneElement(icon as React.ReactElement, { sx: { color: theme.palette.primary.main, mr: 1 } })}
      <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 12, pb: 6 }}>
      <Helmet>
        <title>About Me | Ahmed Abdullahi</title>
        <meta name="description" content="Full-Stack Developer Ahmed Abdullahi's personal website. Learn about his experience, skills, and projects." />
      </Helmet>

      <Paper elevation={6} sx={{ borderRadius: '30px', overflow: 'hidden', backgroundColor: theme.palette.background.paper }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              p: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              color: theme.palette.common.white
            }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  alt="Ahmed Abdullahi"
                  src={myPhoto}
                  sx={{ width: 200, height: 200, mb: 3, border: `4px solid ${theme.palette.common.white}`, boxShadow: theme.shadows[10] }}
                />
              </motion.div>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Ahmed Abdullahi
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3, 
                  color: theme.palette.common.white,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                Full-Stack Developer
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 3 }}>
                {["Java", "TypeScript", "Python", "Golang", "React", "Spring Boot", "AWS", "Microservices"].map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton aria-label="LinkedIn" sx={{ color: 'white' }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="GitHub" sx={{ color: 'white' }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="Email" sx={{ color: 'white' }}>
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ p: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionTitle icon={<CodeIcon />} title="About Me" />
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I'm a highly motivated Full-Stack Software Engineer with experience across diverse industries including real estate and retail. I thrive in fast-paced, dynamic environments where I can build, test, and deploy cutting-edge solutions.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  My technical expertise spans Java, TypeScript, Python, and Golang. I'm proficient in building microservices architectures with Spring Boot, deploying cloud solutions on AWS, and crafting engaging user interfaces with React.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <SectionTitle icon={<SchoolIcon />} title="Education" />
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    B.S. in Computer Science
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    University of XYZ, 20XX
                  </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <SectionTitle icon={<WorkIcon />} title="Work Experience" />
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Senior Software Engineer
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Tech Corp (20XX - Present)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Software Developer
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Innovative Solutions Inc. (20XX - 20XX)
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default React.memo(About);
