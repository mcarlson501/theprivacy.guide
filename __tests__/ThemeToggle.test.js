/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../components/ThemeToggle';

// Mock the useTheme hook
const mockToggleTheme = jest.fn();
const mockUseTheme = jest.fn();

jest.mock('../context/ThemeContext', () => ({
  useTheme: () => mockUseTheme()
}));

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    mockToggleTheme.mockClear();
    mockUseTheme.mockClear();
  });

  it('shows loading placeholder when not loaded', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      isLoaded: false
    });

    const { container } = render(<ThemeToggle />);
    
    const placeholder = container.querySelector('.opacity-30');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveClass('w-5', 'h-5');
  });

  it('renders toggle button when loaded', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls toggleTheme when clicked', async () => {
    const user = userEvent.setup();
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('has proper accessibility attributes', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('shows correct aria-label for dark mode', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: true,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('displays correct icon for light mode', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    // Should show moon icon for light mode (to switch to dark)
    const moonIcon = screen.getByRole('button').querySelector('svg');
    expect(moonIcon).toBeInTheDocument();
  });

  it('displays correct icon for dark mode', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: true,
      toggleTheme: mockToggleTheme,
      isLoaded: true
    });

    render(<ThemeToggle />);
    
    // Should show sun icon for dark mode (to switch to light)
    const sunIcon = screen.getByRole('button').querySelector('svg');
    expect(sunIcon).toBeInTheDocument();
  });
});