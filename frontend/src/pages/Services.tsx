import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Code, Web, Storage, Cloud } from "@mui/icons-material";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    icon: <Web fontSize="large" />,
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end solutions from database to user interface.",
    icon: <Code fontSize="large" />,
  },
  {
    title: "Database Design",
    description: "Efficient and scalable database architectures.",
    icon: <Storage fontSize="large" />,
  },
  {
    title: "Cloud Solutions",
    description: "Cloud-native applications and migrations.",
    icon: <Cloud fontSize="large" />,
  },
];

const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
      <Helmet>
        <title>Services | Ahmed Abdullahi</title>
        <meta
          name="description"
          content="Professional software development services offered by Ahmed Abdullahi."
        />
      </Helmet>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
              }}
            >
              <Box sx={{ m: 2, color: "primary.main" }}>{service.icon}</Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
