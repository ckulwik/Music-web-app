import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Check localStorage and system preference
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      return savedMode;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#ff6b6b' : '#a90b1b', // Lighter red for dark mode
        light: '#e73410', // Your orange
        dark: '#03697a',  // Your blue
        contrastText: mode === 'dark' ? '#000000' : '#ffffff',
      },
      secondary: {
        main: '#f68b09', // Your yellow
      },
      background: {
        default: mode === 'dark' ? '#2a3439' : '#f0ebe3', // Darker cream for light mode
        paper: mode === 'dark' ? '#1a1f23' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#2a3439',
        secondary: mode === 'dark' ? '#d0d0d0' : '#4a4a4a',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        background: mode === 'dark'
          ? 'linear-gradient(45deg, #ff6b6b, #f68b09)' // Lighter red to yellow for dark mode
          : 'linear-gradient(45deg, #a90b1b, #f68b09)', // Your original red to yellow
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      },
      h2: {
        fontWeight: 600,
        color: mode === 'dark' ? '#ffffff' : '#2a3439',
      },
      h3: {
        fontWeight: 600,
        color: mode === 'dark' ? '#e0e0e0' : '#2a3439',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: mode === 'dark' ? 'blur(10px)' : 'none',
            backgroundColor: mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : '#ffffff',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        },
      },
    },
  }), [mode]);

  const value = {
    mode,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
