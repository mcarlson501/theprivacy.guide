/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import AboutPage from '../app/about/page';
import PrivacyPolicyPage from '../app/privacy/page';
import SettingsPage from '../app/settings/page';

// Mock the ProgressManager component for Settings page
jest.mock('../components/ProgressManager', () => {
  return function MockProgressManager() {
    return <div data-testid="progress-manager">Progress Manager</div>;
  };
});

describe('Static Pages', () => {
  describe('About Page', () => {
    it('renders without crashing', () => {
      render(<AboutPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('displays the main heading with correct text', () => {
      render(<AboutPage />);
      expect(screen.getByRole('heading', { level: 1, name: /about/i })).toBeInTheDocument();
    });

    it('contains our mission heading', () => {
      render(<AboutPage />);
      expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument();
    });

    it('has accessibility-friendly structure with multiple headings', () => {
      render(<AboutPage />);
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(1);
    });
  });

  describe('Privacy Policy Page', () => {
    it('renders without crashing', () => {
      render(<PrivacyPolicyPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('displays privacy policy heading', () => {
      render(<PrivacyPolicyPage />);
      expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    });

    it('contains our privacy promise section', () => {
      render(<PrivacyPolicyPage />);
      expect(screen.getByText(/our privacy promise/i)).toBeInTheDocument();
    });

    it('explains local data storage', () => {
      render(<PrivacyPolicyPage />);
      expect(screen.getByText(/store everything locally on your device/i)).toBeInTheDocument();
    });
  });

  describe('Settings Page', () => {
    it('renders without crashing', () => {
      render(<SettingsPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('displays settings heading', () => {
      render(<SettingsPage />);
      expect(screen.getByRole('heading', { level: 1, name: /settings/i })).toBeInTheDocument();
    });

    it('includes progress manager component', () => {
      render(<SettingsPage />);
      expect(screen.getByTestId('progress-manager')).toBeInTheDocument();
    });

    it('has proper page structure', () => {
      render(<SettingsPage />);
      const container = screen.getByRole('heading', { name: /settings/i }).closest('div').parentElement.parentElement;
      expect(container).toHaveClass('min-h-screen');
    });
  });
});