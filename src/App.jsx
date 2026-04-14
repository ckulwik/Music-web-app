import { useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  CircularProgress,
  LinearProgress,
  Typography
} from "@mui/material";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import React from "react";

// Lazy load components
const EnhancedMusic = lazy(() => import("./components/EnhancedMusic"));
const About = lazy(() => import("./components/About"));
const Links = lazy(() => import("./components/Links"));
const ModernHeader = lazy(() => import("./components/ModernHeader"));
const Logo = lazy(() => import("./components/Logo"));
const Footer = lazy(() => import("./components/Footer"));
const RetroWaveFooter = lazy(() => import("./components/RetroWaveFooter"));

const App = () => {
  const MusicRef = useRef(null);
  const AboutRef = useRef(null);
  const LinksRef = useRef(null);

  // Enhanced loading component
  const LoadingScreen = () => (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: 'background.default' }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <CircularProgress size={80} thickness={4} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Typography variant="h6" sx={{ mt: 3, color: 'text.primary' }}>
          Loading amazing music...
        </Typography>
      </motion.div>
      <Box sx={{ width: '200px', mt: 2 }}>
        <LinearProgress />
      </Box>
    </Box>
  );

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <CustomThemeProvider>
      <Box className="app-container" sx={{ minHeight: '100vh' }}>
        <Suspense fallback={<LoadingScreen />}>
          <ModernHeader MusicRef={MusicRef} AboutRef={AboutRef} LinksRef={LinksRef} />

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Logo />
          </motion.div>

          {/* Music Section */}
          <motion.section
            className="page"
            ref={MusicRef}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
          >
            <EnhancedMusic />
          </motion.section>

          {/* About Section */}
          <motion.section
            className="page"
            ref={AboutRef}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
          >
            <Container maxWidth="lg">
              <About />
            </Container>
          </motion.section>

          {/* Links Section */}
          <motion.section
            className="page links"
            ref={LinksRef}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
          >
            <Container maxWidth="lg">
              <Links />
            </Container>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Footer />
          </motion.footer>

          {/* Retro Wave Footer */}
          <RetroWaveFooter />
        </Suspense>
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
