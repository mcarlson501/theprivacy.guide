/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import LoadingWrapper from '../components/LoadingWrapper';
import { ProgressProvider } from '../context/ProgressContext';

// Mock the useProgress hook for different loading states
const mockUseProgress = jest.fn();
jest.mock('../context/ProgressContext', () => ({
  ...jest.requireActual('../context/ProgressContext'),
  useProgress: () => mockUseProgress(),
}));

describe('LoadingWrapper Component', () => {
  beforeEach(() => {
    mockUseProgress.mockClear();
  });

  it('shows loading spinner when not loaded', () => {
    mockUseProgress.mockReturnValue({ isLoaded: false });
    
    render(
      <LoadingWrapper>
        <div>Child Content</div>
      </LoadingWrapper>
    );

    expect(screen.getByText('Loading your progress...')).toBeInTheDocument();
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument();
  });

  it('shows children when loaded', () => {
    mockUseProgress.mockReturnValue({ isLoaded: true });
    
    render(
      <LoadingWrapper>
        <div>Child Content</div>
      </LoadingWrapper>
    );

    expect(screen.getByText('Child Content')).toBeInTheDocument();
    expect(screen.queryByText('Loading your progress...')).not.toBeInTheDocument();
  });

  it('displays loading spinner with correct styling', () => {
    mockUseProgress.mockReturnValue({ isLoaded: false });
    
    render(
      <LoadingWrapper>
        <div>Child Content</div>
      </LoadingWrapper>
    );

    const loadingContainer = screen.getByText('Loading your progress...').closest('.text-center');
    expect(loadingContainer).toBeInTheDocument();
    
    // Check for spinner element (div with animate-spin class)
    const spinner = loadingContainer.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('rounded-full', 'border-b-2', 'border-friendly-blue');
  });

  it('has proper loading layout structure', () => {
    mockUseProgress.mockReturnValue({ isLoaded: false });
    
    const { container } = render(
      <LoadingWrapper>
        <div>Child Content</div>
      </LoadingWrapper>
    );

    const loadingDiv = container.querySelector('.min-h-screen');
    expect(loadingDiv).toBeInTheDocument();
    expect(loadingDiv).toHaveClass('min-h-screen', 'bg-gray-50', 'flex', 'items-center', 'justify-center');
  });

  it('renders multiple children when loaded', () => {
    mockUseProgress.mockReturnValue({ isLoaded: true });
    
    render(
      <LoadingWrapper>
        <div>First Child</div>
        <div>Second Child</div>
      </LoadingWrapper>
    );

    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});