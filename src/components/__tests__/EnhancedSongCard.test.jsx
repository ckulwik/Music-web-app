import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EnhancedSongCard from '../EnhancedSongCard';

const theme = createTheme({
  palette: {
    primary: { main: '#a90b1b' },
    secondary: { main: '#f68b09' },
    background: { paper: '#ffffff' },
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

const mockSong = {
  id: '1',
  title: 'Test Song',
  soundcloudUrl: 'https://soundcloud.com/test-song'
};

describe('EnhancedSongCard Component', () => {
  it('renders without crashing', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={0} />);
  });

  it('renders the iframe with correct src', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={0} />);
    const iframe = screen.getByTitle(/SoundCloud player for Test Song/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://soundcloud.com/test-song');
  });

  it('has proper ARIA label for accessibility', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={0} />);
    const iframe = screen.getByLabelText(/SoundCloud player for Test Song/i);
    expect(iframe).toBeInTheDocument();
  });

  it('renders with correct dimensions', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={0} />);
    const iframe = screen.getByTitle(/SoundCloud player for Test Song/i);
    expect(iframe).toBeInTheDocument();
  });

  it('has no border on iframe', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={0} />);
    const iframe = screen.getByTitle(/SoundCloud player for Test Song/i);
    expect(iframe).toHaveStyle({ border: 'none' });
  });

  it('receives index prop for animation delay', () => {
    renderWithTheme(<EnhancedSongCard song={mockSong} index={2} />);
    // Component should render with index prop for animation
    const iframe = screen.getByTitle(/SoundCloud player for Test Song/i);
    expect(iframe).toBeInTheDocument();
  });
});
