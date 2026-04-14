import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const RetroWaveFooter = () => {
  const theme = useTheme();

  const colors = [
    theme.palette.primary.main, // red
    theme.palette.secondary.main, // yellow
    '#e73410', // orange
    '#03697a', // blue
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '120px',
        overflow: 'hidden',
        zIndex: 1000,
      }}
    >
      {/* Multiple wave layers with different colors */}
      {colors.map((color, index) => (
        <motion.svg
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.2,
            duration: 0.8,
            type: "spring"
          }}
          style={{
            position: 'absolute',
            bottom: `${index * 20}px`,
            left: 0,
            width: '100%',
            height: '60px',
            zIndex: colors.length - index,
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill={color}
            opacity={1.0 - (index * 0.1)}
            initial={{ d: "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z",
                "M0,60 C150,0 350,120 600,60 C850,0 1050,120 1200,60 L1200,120 L0,120 Z",
                "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      ))}
    </Box>
  );
};

export default RetroWaveFooter;
