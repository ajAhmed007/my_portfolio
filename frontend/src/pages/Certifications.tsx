// src/pages/Certifications.tsx
import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "August 2023",
    logo: "/assets/images/aws-logo.png",
  },
  // Add more certifications
];

const Certifications: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={cert.logo}
                alt={cert.name}
                style={{ height: 50, margin: 16 }}
              />
              <CardContent>
                <Typography variant="h6">{cert.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {cert.issuer}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {cert.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certifications;
