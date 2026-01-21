import '@testing-library/jest-dom'; 
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
  test('renders Hero component with correct text and button', () => {
    render(<Hero />);

    // Image check
    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage.src).toContain('homeHero.png');

    // Heading check
    expect(
      screen.getByText(/invest in everything/i)
    ).toBeInTheDocument();

    // Button check
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument();
  });
});

