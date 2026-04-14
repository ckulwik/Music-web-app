import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from '../About';

const theme = createTheme({
  palette: {
    primary: { main: '#a90b1b' },
    secondary: { main: '#f68b09' },
    text: { primary: '#2a3439', secondary: '#666666' },
    mode: 'light'
  }
});

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('About Component', () => {
  it('renders without crashing', () => {
    renderWithTheme(<About />);
  });

  it('renders the "About Me" heading', () => {
    renderWithTheme(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the professional summary', () => {
    renderWithTheme(<About />);
    expect(screen.getByText(/Full Stack Developer with 8 years of experience/i)).toBeInTheDocument();
  });

  it('renders the current role section', () => {
    renderWithTheme(<About />);
    expect(screen.getByText('Current Role')).toBeInTheDocument();
    expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
  });

  it('renders the skills section', () => {
    renderWithTheme(<About />);
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
    expect(screen.getByText('React with Redux')).toBeInTheDocument();
    expect(screen.getByText('Vue.js 2 and 3')).toBeInTheDocument();
  });

  it('renders the AWS certifications section', () => {
    renderWithTheme(<About />);
    expect(screen.getByText('AWS Certifications')).toBeInTheDocument();
    expect(screen.getByText(/AWS Certified Developer - Associate/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS Certified Cloud Practitioner/i)).toBeInTheDocument();
  });

  it('renders the contact email', () => {
    renderWithTheme(<About />);
    expect(screen.getByText('ckulwik@gmail.com')).toBeInTheDocument();
  });

  it('has proper ARIA label for accessibility', () => {
    const { container } = renderWithTheme(<About />);
    expect(container.querySelector('section')).toHaveAttribute('aria-label', 'About section');
  });
});
