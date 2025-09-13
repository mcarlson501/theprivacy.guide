import { render, screen, fireEvent } from '@testing-library/react'
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

  test('shows completion status when task is completed', () => {
    // Mock completed task
    const completedTask = { ...mockTask, completed: true }
    renderWithProviders(<TaskCard task={completedTask} />)
    
    // Should show some indication of completion (checkmark, "Completed", etc.)
    const completionIndicator = screen.queryByText(/completed/i) || screen.queryByRole('img', { name: /check/i })
    expect(completionIndicator).toBeInTheDocument()
  })

  test('is clickable and interactive', () => {
    const mockOnClick = jest.fn()
    renderWithProviders(<TaskCard task={mockTask} onClick={mockOnClick} />)
    
    const taskCard = screen.getByRole('article') || screen.getByTestId('task-card') || screen.getByText('Test Privacy Task').closest('div')
    fireEvent.click(taskCard)
    
    expect(mockOnClick).toHaveBeenCalledWith(mockTask)
  })

  test('displays badge information', () => {
    renderWithProviders(<TaskCard task={mockTask} />)
    expect(screen.getByText('Privacy Starter')).toBeInTheDocument()
  })
})