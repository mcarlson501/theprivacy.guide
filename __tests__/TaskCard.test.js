import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import { ProgressProvider } from '../context/ProgressContext'
import TaskCard from '../components/TaskCard'

const mockTask = {
  slug: 'test-task',
  title: 'Test Privacy Task',
  description: 'A test task for privacy improvement',
  category: 'Quick Win',
  time: '5 minutes',
  points: 25,
  badgeName: 'Privacy Starter'
}

const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        {ui}
      </ProgressProvider>
    </ThemeProvider>
  )
}

describe('TaskCard Component', () => {
  test('renders task information correctly', () => {
    renderWithProviders(<TaskCard task={mockTask} />)
    
    expect(screen.getByText('Test Privacy Task')).toBeInTheDocument()
    expect(screen.getByText('A test task for privacy improvement')).toBeInTheDocument()
    expect(screen.getByText('Quick Win')).toBeInTheDocument()
    expect(screen.getByText('5 minutes')).toBeInTheDocument()
    expect(screen.getByText('25 points')).toBeInTheDocument()
  })

  test('shows task category', () => {
    renderWithProviders(<TaskCard task={mockTask} />)
    expect(screen.getByText('Quick Win')).toBeInTheDocument()
  })

  test('shows start task link', () => {
    renderWithProviders(<TaskCard task={mockTask} />)
    const startButton = screen.getByRole('link', { name: /start task/i })
    expect(startButton).toBeInTheDocument()
  })

  test('displays points correctly', () => {
    renderWithProviders(<TaskCard task={mockTask} />)
    expect(screen.getByText(/25\s+points/)).toBeInTheDocument()
  })
})