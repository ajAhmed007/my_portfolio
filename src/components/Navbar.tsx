import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../ThemeProvider';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        boxShadow: theme.shadows[4],
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Your Name
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/experience"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Experience
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resume"
            sx={{
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Resume
          </Button>
        </Box>

        {/* Theme Toggle Button */}
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
