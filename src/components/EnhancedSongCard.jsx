import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(motion.div)(({ theme }) => ({
  width: '320px',
  margin: '20px',
  perspective: '1000px',
}));

const CardContainer = styled(Card)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.background.paper,
  border: `6px solid ${theme.palette.primary.main}`, // Theme-aware red
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '-6px 6px 0 0 #e73410, -12px 12px 0 0 #f68b09', // Your orange and yellow
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.15)',
    boxShadow: '-8px 8px 0 0 #e73410, -16px 16px 0 0 #f68b09',
  }
}));

const EnhancedSongCard = ({ song, index }) => {

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Combined animation for entry + floating
  const combinedAnimation = {
    ...cardVariants.visible,
    y: [0, -10, 0],
    transition: {
      ...cardVariants.visible.transition,
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }
    }
  };

  return (
    <StyledCard
      variants={cardVariants}
      initial="hidden"
      animate={combinedAnimation}
      whileHover="hover"
    >
      <CardContainer>
        <CardContent sx={{ p: 0, height: '400px' }}>
          {/* Song iframe/embed */}
          <Box
            component="iframe"
            src={song.soundcloudUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay"
            title={`SoundCloud player for ${song.title}`}
            aria-label={`SoundCloud player for ${song.title}`}
            sx={{ border: 'none' }}
          />
        </CardContent>
      </CardContainer>
    </StyledCard>
  );
};

export default EnhancedSongCard;
