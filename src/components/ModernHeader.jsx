import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  useTheme
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu,
  Close
} from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(18, 18, 18, 0.8)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  position: 'fixed',
  zIndex: 1300,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    backgroundSize: '300% 100%',
    animation: 'gradientMove 8s ease infinite',
    opacity: 0.6,
  },
  '@keyframes gradientMove': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

const NavItem = styled(motion.button)(({ theme, active }) => ({
  background: 'none',
  border: 'none',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.action.hover,
    transform: 'translateY(-2px)',
  },
}));

const MobileMenu = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: theme.palette.background.default,
  zIndex: 1300,
  display: 'flex',
  flexDirection: 'column',
  padding: '80px 20px 20px',
}));

const ModernHeader = ({ MusicRef, AboutRef, LinksRef }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useCustomTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('music');

  const navItems = useMemo(() => [
    { id: 'music', label: 'Music', ref: MusicRef },
    { id: 'about', label: 'About', ref: AboutRef },
    { id: 'links', label: 'Links', ref: LinksRef },
  ], [MusicRef, AboutRef, LinksRef]);

  const scrollToSection = (ref, sectionId) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navItems.forEach(({ id, ref }) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <>
      <StyledAppBar
        position="fixed"
        component={motion.div}
        variants={headerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Chris Kulwik
            </Typography>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation">
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <NavItem
                    key={item.id}
                    active={activeSection === item.id}
                    onClick={() => scrollToSection(item.ref, item.id)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </NavItem>
                ))}

                <motion.div
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <IconButton
                    onClick={toggleTheme}
                    aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
                    sx={{
                      ml: 2,
                      background: theme.palette.action.hover,
                      '&:hover': {
                        background: theme.palette.action.selected,
                      }
                    }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                </motion.div>
              </Box>
            </nav>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{ mr: 1 }}
                aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                sx={{ color: theme.palette.text.primary }}
              >
                {mobileMenuOpen ? <Close /> : <Menu />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          role="navigation"
          aria-label="Mobile navigation menu"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <Close />
            </IconButton>
          </Box>

          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                onClick={() => scrollToSection(item.ref, item.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToSection(item.ref, item.id);
                  }
                }}
                aria-label={`Navigate to ${item.label}`}
                sx={{
                  py: 2,
                  px: 3,
                  mb: 2,
                  borderRadius: 2,
                  background: activeSection === item.id
                    ? theme.palette.primary.main + '20'
                    : 'transparent',
                  border: activeSection === item.id
                    ? `2px solid ${theme.palette.primary.main}`
                    : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: theme.palette.action.hover,
                    transform: 'translateX(5px)',
                  }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </MobileMenu>
      )}
    </>
  );
};

export default ModernHeader;
