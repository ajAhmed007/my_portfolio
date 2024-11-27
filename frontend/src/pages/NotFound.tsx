import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Helmet>
        <title>404 - Page Not Found | Ahmed Abdullahi Portfolio</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 2 }}>
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
