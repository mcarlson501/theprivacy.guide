import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import { ProgressProvider } from '../context/ProgressContext'
import Header from '../components/Header'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
      push: jest.fn(),
    }
  },
}))

const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        {ui}
      </ProgressProvider>
    </ThemeProvider>
  )
}

describe('Header Component', () => {
  test('renders the Privacy Guide title', () => {
    renderWithProviders(<Header />)
    expect(screen.getByText('The Privacy Guide')).toBeInTheDocument()
  })

  test('renders navigation links', () => {
    renderWithProviders(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Tasks')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  test('renders menu button for mobile', () => {
    renderWithProviders(<Header />)
    // Look for mobile menu button
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  test('shows privacy level indicator', () => {
    renderWithProviders(<Header />)
    expect(screen.getByText('Privacy Intern')).toBeInTheDocument()
  })
})