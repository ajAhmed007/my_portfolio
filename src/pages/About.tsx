import React from "react";
import { Container, Grid, Typography, Avatar, Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AboutTabs from "../components/AboutTabs";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/ahmed-abdullahi.jpeg";

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ mt: 12, pb: 6 }}>
      <Helmet>
        <title>About Me | Ahmed Abdullahi</title>
      </Helmet>

      {/* Hero Section with Avatar */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #6200ea, #03dac6)",
          borderRadius: 2,
          p: 4,
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)", // Dark overlay for better readability
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Avatar
            alt="Ahmed Abdullahi"
            src={myPhoto}
            sx={{
              width: 150,
              height: 150,
              margin: "auto",
              mb: 4,
              border: `4px solid ${theme.palette.primary.main}`,
              boxShadow: 2,
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            Hi, I'm Ahmed
          </Typography>
          <Typography variant="h5" sx={{ color: "#eee", mb: 2 }}>
            Full-Stack Developer | Passionate about Building Scalable Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", maxWidth: 600, margin: "auto" }}
          >
            With hands-on experience in delivering end-to-end software
            solutions, I specialize in developing scalable, high-performance
            applications that streamline processes and drive business growth.
            Let’s create impactful solutions together.
          </Typography>
        </Box>
      </Box>

      {/* Animated About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          {/* About Me Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I’m a highly motivated Full-Stack Software Engineer with
              experience across diverse industries including real estate and
              retail. I thrive in fast-paced, dynamic environments where I can
              build, test, and deploy cutting-edge solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              My technical expertise spans Java, TypeScript, Python, and Golang.
              I’m proficient in building microservices architectures with Spring
              Boot, deploying cloud solutions on AWS, and crafting engaging user
              interfaces with React. My approach is rooted in Agile methodology,
              and I strive for continuous improvement in all aspects of
              development.
            </Typography>
            <Typography variant="body1" paragraph>
              Highlights of my work include developing microservices that
              reduced system downtime by 30% at CoStar Group and improving
              application efficiency by 50% at Target. I'm passionate about
              leveraging modern technologies to deliver business value and
              enhance user experiences.
            </Typography>

            <Typography variant="body1" paragraph>
              Here are some technologies I work with:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body1">
                Java, TypeScript, Python, and Golang for back-end and front-end
                development.
              </Typography>
              <Typography component="li" variant="body1">
                Spring Boot, React, Node.js, and Docker for building and
                deploying scalable solutions.
              </Typography>
              <Typography component="li" variant="body1">
                AWS, Redis, PostgreSQL, and NoSQL databases for cloud
                infrastructure and data management.
              </Typography>
              <Typography component="li" variant="body1">
                Agile methodologies, CI/CD pipelines, and microservices
                architecture to ensure efficient development cycles.
              </Typography>
            </Box>
          </Grid>

          {/* Interactive Tabs Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              My Journey
            </Typography>
            <Typography variant="body1" paragraph>
              From internships at companies like Target and Cquest-IP to my
              current role as a Software Engineer at CoStar Group, I’ve gained a
              wealth of experience in building innovative solutions across
              multiple domains. My journey has been defined by a commitment to
              learning, growth, and delivering impactful software that makes a
              difference.
            </Typography>
            <AboutTabs />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
