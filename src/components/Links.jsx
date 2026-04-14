import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Links = () => {
  const theme = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Connect with Chris Kulwik on social media"
    >
      <Box
        className="links-page-container"
        sx={{
          py: 8,
          px: 4,
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h4"
          component={motion.h2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Connect
        </Typography>

        <Box
          className="links-container"
          sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* SoundCloud Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              component="a"
              href="https://soundcloud.com/chris-kulwik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Chris Kulwik's SoundCloud profile"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                border: `2px solid ${theme.palette.text.primary}`,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                '&:hover': {
                  background: '#ff5500', // SoundCloud orange
                  borderColor: '#ff5500',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(255, 85, 0, 0.3)'
                }
              }}
            >
              <iframe
                title="soundCloud logo, link to chris kulwik's soundcloud"
                allowtransparency="true"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fchris-kulwik&color=transparent_transparent&size=32"
                style={{
                  width: 32 + "px",
                  height: 32 + "px",
                  border: 'none'
                }}
              />
            </Box>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              component="a"
              href="https://github.com/ckulwik/music-web-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Chris Kulwik's GitHub profile"
              sx={{
                width: 60,
                height: 60,
                background: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                border: `2px solid ${theme.palette.text.primary}`,
                color: theme.palette.text.primary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  color: 'white',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(169, 11, 27, 0.3)'
                }
              }}
            >
              <GitHubIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </motion.div>

          {/* LinkedIn Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ckulwik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Chris Kulwik's LinkedIn profile"
              sx={{
                width: 60,
                height: 60,
                background: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                border: `2px solid ${theme.palette.text.primary}`,
                color: theme.palette.text.primary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#0077B5', // LinkedIn blue
                  borderColor: '#0077B5',
                  color: 'white',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(0, 119, 181, 0.3)'
                }
              }}
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </motion.div>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            mb: 8,
            color: theme.palette.text.secondary,
            fontSize: '0.9rem'
          }}
        >
          Follow my music and development journey
        </Typography>
      </Box>
    </motion.section>
  );
};

export default Links;
