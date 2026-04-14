import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

// Mock the animation script
jest.mock('../../scripts/animation.js', () => jest.fn());

describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo isDesktop={true} />);
  });

  it('renders the logo image with correct alt text', () => {
    render(<Logo isDesktop={true} />);
    const logo = screen.getByAltText('chris kulwik music main logo, in colorful retro font');
    expect(logo).toBeInTheDocument();
  });

  it('has the correct image source', () => {
    render(<Logo isDesktop={true} />);
    const logo = screen.getByAltText('chris kulwik music main logo, in colorful retro font');
    expect(logo).toHaveAttribute('src', 'https://music-web-app-songs.s3.us-east-2.amazonaws.com/ChrisKulwikLogoSmaller.png');
  });

  it('has pointer cursor styling', () => {
    render(<Logo isDesktop={true} />);
    const logo = screen.getByAltText('chris kulwik music main logo, in colorful retro font');
    expect(logo).toHaveStyle({ cursor: 'pointer' });
  });
});
