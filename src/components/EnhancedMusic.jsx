import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Container,
  Tab,
  Tabs,
  Alert,
  Skeleton,
  Fade,
  useTheme
} from '@mui/material';
import {
  Search,
  MusicNote,
  Album,
  Refresh
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useSongs } from '../hooks/useSongs';
import EnhancedSongCard from './EnhancedSongCard';
import { Input } from './ui/input';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  py: 4,
  position: 'relative',
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiOutlinedInput-root': {
    borderRadius: 16,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
    '&.Mui-focused': {
      boxShadow: theme.shadows[8],
    },
  },
}));

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`music-tabpanel-${index}`}
    aria-labelledby={`music-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Fade in={true}>
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      </Fade>
    )}
  </div>
);

const LoadingSkeleton = () => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 3 }} />
      <Skeleton variant="text" height={30} sx={{ mt: 2 }} />
      <Skeleton variant="text" height={20} width="60%" />
    </motion.div>
  </Grid>
);

const EnhancedMusic = () => {
  const theme = useTheme();
  const { songs: originalsSongs, loading: originalsLoading, error: originalsError } = useSongs('Originals');
  const { songs: mashupsSongs, loading: mashupsLoading, error: mashupsError } = useSongs('Mashups etc.');

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (originalsLoading || mashupsLoading) {
        setTimedOut(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [originalsLoading, mashupsLoading]);

  // Filter songs based on search term
  const filterSongs = React.useCallback((songs) => {
    if (!songs) return [];

    return songs.filter(song => {
      const matchesSearch = song.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  const filteredOriginals = useMemo(() => filterSongs(originalsSongs), [originalsSongs, filterSongs]);
  const filteredMashups = useMemo(() => filterSongs(mashupsSongs), [mashupsSongs, filterSongs]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderErrorState = (error, category) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Alert
        severity="error"
        sx={{ mb: 4 }}
        action={
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Refresh
              onClick={() => window.location.reload()}
              style={{ cursor: 'pointer' }}
            />
          </motion.div>
        }
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Oops! Something went wrong
        </Typography>
        <Typography variant="body2">
          Couldn't load {category.toLowerCase()}. Please refresh the page to try again.
        </Typography>
      </Alert>
    </motion.div>
  );

  const renderLoadingState = () => (
    <Grid container spacing={3}>
      {[...Array(8)].map((_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </Grid>
  );

  const renderSongGrid = (songs, category) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, md: 0 } }}>
        <AnimatePresence>
          {songs.length > 0 ? (
            songs.map((song, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={song.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <EnhancedSongCard song={song} index={index} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', py: 8 }}
              >
                <MusicNote sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  No {category.toLowerCase()} found matching your search
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Try adjusting your search or filters
                </Typography>
              </motion.div>
            </Grid>
          )}
        </AnimatePresence>
      </Grid>
    </motion.div>
  );

  return (
    <StyledContainer maxWidth="xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" sx={{
          mb: 2,
          textAlign: 'center',
          fontWeight: 700,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Music Collection
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
          Explore my original compositions and creative mashups
        </Typography>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '500px',
              width: '100%',
            }}
          >
            <Search
              sx={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'text.secondary',
                pointerEvents: 'none',
              }}
            />
            <Input
              type="text"
              placeholder="Search songs by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search songs by title"
              style={{
                width: '100%',
                paddingLeft: '40px',
                borderRadius: '16px',
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
                border: `1px solid ${theme.palette.divider}`,
                padding: '0.5rem 1rem 0.5rem 2.5rem',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = theme.shadows[4];
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = theme.shadows[2];
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = theme.shadows[8];
                e.target.style.borderColor = theme.palette.primary.main;
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = theme.shadows[2];
                e.target.style.borderColor = theme.palette.divider;
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 2 }}
        >
          <Tab
            icon={<Album />}
            label="Originals"
            iconPosition="start"
            sx={{ minHeight: 60 }}
          />
          <Tab
            icon={<MusicNote />}
            label="Mashups"
            iconPosition="start"
            sx={{ minHeight: 60 }}
          />
        </Tabs>
      </motion.div>

      {/* Tab Panels */}
      <TabPanel value={activeTab} index={0}>
        {originalsError ? (
          renderErrorState(originalsError, 'Originals')
        ) : originalsLoading && !timedOut ? (
          renderLoadingState()
        ) : (
          renderSongGrid(filteredOriginals, 'originals')
        )}
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        {mashupsError ? (
          renderErrorState(mashupsError, 'Mashups')
        ) : mashupsLoading && !timedOut ? (
          renderLoadingState()
        ) : (
          renderSongGrid(filteredMashups, 'mashups')
        )}
      </TabPanel>

      {/* Timeout Message */}
      {timedOut && (originalsLoading || mashupsLoading) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', py: 4 }}
        >
          <Alert severity="warning" sx={{ mb: 2 }}>
            Taking longer than expected to load songs...
          </Alert>
        </motion.div>
      )}
    </StyledContainer>
  );
};

export default EnhancedMusic;
