/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ProgressCard from '../components/ProgressCard';
import { ProgressProvider } from '../context/ProgressContext';

// Mock the useProgress hook
const mockUseProgress = jest.fn();
jest.mock('../context/ProgressContext', () => ({
  ...jest.requireActual('../context/ProgressContext'),
  useProgress: () => mockUseProgress(),
}));

// Mock the getPrivacyLevel function 
jest.mock('../lib/levels', () => ({
  getPrivacyLevel: jest.fn(() => ({
    title: 'Privacy Intern',
    emoji: '🔍',
    color: 'text-gray-600'
  }))
}));

describe('ProgressCard Component', () => {
  beforeEach(() => {
    mockUseProgress.mockClear();
  });

  it('renders without crashing', () => {
    mockUseProgress.mockReturnValue({
      score: 100,
      completedTasks: ['task1', 'task2'],
      badges: []
    });

    render(<ProgressCard />);
    expect(screen.getByText('Your Privacy Journey')).toBeInTheDocument();
  });

  it('displays correct progress information', () => {
    mockUseProgress.mockReturnValue({
      score: 250,
      completedTasks: ['task1', 'task2', 'task3'],
      badges: []
    });

    render(<ProgressCard totalTasks={10} />);
    
    expect(screen.getByText('Your Privacy Journey')).toBeInTheDocument();
    expect(screen.getByText(/track your progress/i)).toBeInTheDocument();
  });

  it('calculates progress percentage correctly', () => {
    mockUseProgress.mockReturnValue({
      score: 100,
      completedTasks: ['task1', 'task2'],
      badges: []
    });

    render(<ProgressCard totalTasks={10} />);
    
    // Should calculate 2/10 = 20% progress
    expect(screen.getByText(/20.*% complete/)).toBeInTheDocument();
  });

  it('handles zero tasks gracefully', () => {
    mockUseProgress.mockReturnValue({
      score: 0,
      completedTasks: [],
      badges: []
    });

    render(<ProgressCard totalTasks={0} />);
    
    // Should show 0% when no tasks
    expect(screen.getByText(/0.*% complete/)).toBeInTheDocument();
  });

  it('shows privacy level information', () => {
    mockUseProgress.mockReturnValue({
      score: 100,
      completedTasks: ['task1'],
      badges: []
    });

    render(<ProgressCard totalTasks={21} />);
    
    // Should display the mocked privacy level
    expect(screen.getByText('Privacy Intern')).toBeInTheDocument();
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('displays recent badges when available', () => {
    mockUseProgress.mockReturnValue({
      score: 100,
      completedTasks: ['task1'],
      badges: [
        { name: 'First Steps', icon: '👶', earnedAt: '2024-01-01' },
        { name: 'Explorer', icon: '🧭', earnedAt: '2024-01-02' }
      ]
    });

    render(<ProgressCard />);
    
    expect(screen.getByText('First Steps')).toBeInTheDocument();
    expect(screen.getByText('Explorer')).toBeInTheDocument();
  });

  it('limits badges display to most recent 3', () => {
    mockUseProgress.mockReturnValue({
      score: 100,
      completedTasks: ['task1'],
      badges: [
        { name: 'Old Badge', icon: '🏆', earnedAt: '2024-01-01' },
        { name: 'Badge 2', icon: '⭐', earnedAt: '2024-01-02' },
        { name: 'Badge 3', icon: '🎯', earnedAt: '2024-01-03' },
        { name: 'Latest Badge', icon: '🚀', earnedAt: '2024-01-04' }
      ]
    });

    render(<ProgressCard />);
    
    // Should only show the last 3 badges
    expect(screen.queryByText('Badge 1')).not.toBeInTheDocument(); // Old badge should not be shown
    expect(screen.getByText('Badge 2')).toBeInTheDocument();
    expect(screen.getByText('Badge 3')).toBeInTheDocument();
    expect(screen.getByText('Latest Badge')).toBeInTheDocument();
  });
});