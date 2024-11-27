import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, CircularProgress } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useMemo } from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import NotFound from './pages/NotFound';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/ContactForm"));
const Resume = lazy(() => import("./pages/Resume"));

// New lazy-loaded components
const Blog = lazy(() => import("./pages/Blog"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const Services = lazy(() => import("./pages/Services"));
// const Testimonials = lazy(() => import("./pages/Testimonials"));

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark'); // default to dark

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // ... your other theme configurations
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <CssBaseline />
            <Navbar toggleTheme={toggleTheme} mode={mode} />
            <Suspense fallback={<CircularProgress sx={{ margin: "auto" }} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />

                {/* New routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </Box>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
