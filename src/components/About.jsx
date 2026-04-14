import { Typography, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const About = () => {
  const theme = useTheme();

  const skills = [
    'React with Redux',
    'Vue.js 2 and 3',
    'React Native',
    'GraphQL',
    'AWS',
    'TypeScript / JavaScript',
    'WCAG & Section 508 A11y',
    'Responsive Design',
    'Internationalization',
    'Micro Front-End Architecture',
    'Cursor / GitHub Copilot',
    'CSS / SCSS / SASS',
    'HTML5',
    'WebSocket API',
    'Webpack',
    'Jest',
    'Git / GitHub / GitHub Actions',
    'CI/CD',
    'Agile / Scrum Processes'
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="About section"
    >
      <Box
        className="page-container about-page"
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
            mb: 4,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.1rem',
            maxWidth: '800px',
            lineHeight: 1.8,
            mb: 4
          }}
        >
          Full Stack Developer with 8 years of experience, specializing in Front-End technologies and cloud computing.
          Passionate about building user interfaces that are intuitive, engaging, and enjoyable to use.
        </Typography>

        <Typography
          variant="h6"
          component={motion.h3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{
            color: theme.palette.primary.main,
            mb: 3,
            fontWeight: 600
          }}
        >
          Current Role
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1rem',
            maxWidth: '700px',
            lineHeight: 1.6,
            mb: 4
          }}
        >
          <strong>Senior Software Engineer</strong> at Medicom Technologies Inc. (Remote)<br />
          Front End Lead & Full Stack Developer at a Series-B HealthTech startup. Spearheading Front End architecture
          using Vue.js and Pinia while driving full-stack feature development across a TypeScript and AWS ecosystem.
        </Typography>

        <Divider sx={{ my: 4, width: '60%', borderColor: theme.palette.primary.main, opacity: 0.3 }} />

        <Typography
          variant="h6"
          component={motion.h3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            color: theme.palette.primary.main,
            mb: 3,
            fontWeight: 600
          }}
        >
          Skills & Technologies
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
            mb: 4,
            maxWidth: '900px'
          }}
        >
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="primary"
              style={{
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 107, 107, 0.15)'
                  : 'rgba(169, 11, 27, 0.1)',
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}`,
                fontWeight: 500,
                fontSize: '0.9rem',
                padding: '0.5rem 1rem',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.palette.mode === 'dark'
                  ? 'rgba(255, 107, 107, 0.3)'
                  : 'rgba(169, 11, 27, 0.2)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.transition = 'all 0.2s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.palette.mode === 'dark'
                  ? 'rgba(255, 107, 107, 0.15)'
                  : 'rgba(169, 11, 27, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {skill}
            </Badge>
          ))}
        </Box>

        <Divider sx={{ my: 4, width: '60%', borderColor: theme.palette.primary.main, opacity: 0.3 }} />

        <Typography
          variant="h6"
          component={motion.h3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{
            color: theme.palette.primary.main,
            mb: 3,
            fontWeight: 600
          }}
        >
          AWS Certifications
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            mb: 4
          }}
        >
          <Badge
            variant="accent"
            style={{
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(246, 139, 9, 0.15)'
                : 'rgba(246, 139, 9, 0.1)',
              color: theme.palette.secondary.main,
              border: `1px solid ${theme.palette.secondary.main}`,
              fontWeight: 600,
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              whiteSpace: 'normal',
              textAlign: 'center',
              cursor: 'default',
            }}
          >
            AWS Certified Developer - Associate (October 2025)
          </Badge>
          <Badge
            variant="accent"
            style={{
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(246, 139, 9, 0.15)'
                : 'rgba(246, 139, 9, 0.1)',
              color: theme.palette.secondary.main,
              border: `1px solid ${theme.palette.secondary.main}`,
              fontWeight: 600,
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              whiteSpace: 'normal',
              textAlign: 'center',
              cursor: 'default',
            }}
          >
            AWS Certified Cloud Practitioner (February 2020)
          </Badge>
        </Box>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.1rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}
        >
          Feel free to connect:
          <Typography
            component="a"
            href="mailto:ckulwik@gmail.com"
            sx={{
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontWeight: 600,
              ml: 1,
              '&:hover': {
                color: theme.palette.primary.dark,
                textDecoration: 'underline'
              }
            }}
          >
            ckulwik@gmail.com
          </Typography>
        </Typography>
      </Box>
    </motion.section>
  );
};

export default About;
