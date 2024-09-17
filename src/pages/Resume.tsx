import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Resume: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Helmet>
        <title>Resume | [Your Name] Portfolio</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <embed
          src="/assets/abdullahi-2024-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </Box>
    </Container>
  );
};

export default Resume;
