import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Links from '../Links';

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

describe('Links Component', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Links />);
  });

  it('renders the "Connect" heading', () => {
    renderWithTheme(<Links />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders SoundCloud link with correct href', () => {
    renderWithTheme(<Links />);
    const soundCloudLink = screen.getByLabelText(/Visit Chris Kulwik's SoundCloud profile/i);
    expect(soundCloudLink).toBeInTheDocument();
    expect(soundCloudLink).toHaveAttribute('href', 'https://soundcloud.com/chris-kulwik');
  });

  it('renders GitHub link with correct href', () => {
    renderWithTheme(<Links />);
    const gitHubLink = screen.getByLabelText(/Visit Chris Kulwik's GitHub profile/i);
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/ckulwik/music-web-app');
  });

  it('renders LinkedIn link with correct href', () => {
    renderWithTheme(<Links />);
    const linkedInLink = screen.getByLabelText(/Visit Chris Kulwik's LinkedIn profile/i);
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/ckulwik');
  });

  it('all links have rel="noopener noreferrer" for security', () => {
    renderWithTheme(<Links />);
    const soundCloudLink = screen.getByLabelText(/Visit Chris Kulwik's SoundCloud profile/i);
    const gitHubLink = screen.getByLabelText(/Visit Chris Kulwik's GitHub profile/i);
    const linkedInLink = screen.getByLabelText(/Visit Chris Kulwik's LinkedIn profile/i);

    expect(soundCloudLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(gitHubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('all links have target="_blank"', () => {
    renderWithTheme(<Links />);
    const soundCloudLink = screen.getByLabelText(/Visit Chris Kulwik's SoundCloud profile/i);
    const gitHubLink = screen.getByLabelText(/Visit Chris Kulwik's GitHub profile/i);
    const linkedInLink = screen.getByLabelText(/Visit Chris Kulwik's LinkedIn profile/i);

    expect(soundCloudLink).toHaveAttribute('target', '_blank');
    expect(gitHubLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
  });

  it('renders the follow text', () => {
    renderWithTheme(<Links />);
    expect(screen.getByText('Follow my music and development journey')).toBeInTheDocument();
  });

  it('has proper ARIA label for accessibility', () => {
    const { container } = renderWithTheme(<Links />);
    expect(container.querySelector('section')).toHaveAttribute('aria-label', 'Connect with Chris Kulwik on social media');
  });
});
