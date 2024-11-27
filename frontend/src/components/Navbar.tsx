import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { ColorModeContext } from "../ThemeProvider";

interface NavbarProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, mode }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)`,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/"
          sx={{ 
            fontWeight: "bold", 
            letterSpacing: 1,
            color: "inherit",
            textDecoration: "none",
            '&:hover': {
              color: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          Ahmed Abdullahi
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem key={item.name} onClick={handleClose} component={Link} to={item.path}>
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  mx: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
