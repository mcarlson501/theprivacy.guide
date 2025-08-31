import './globals.css'
import '../styles/accessibility.css'
import '../styles/fonts.css'
import { ProgressProvider } from '../context/ProgressContext'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '../components/Header'
import LoadingWrapper from '../components/LoadingWrapper'

export const metadata = {
  title: 'The Privacy Guide - Take Control of Your Digital Privacy',
  description: 'A gamified, user-friendly guide to help you improve your digital privacy through simple, actionable tasks. Build better privacy habits with our step-by-step approach.',
  keywords: 'privacy, digital privacy, online security, privacy guide, data protection',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-calm-off-white dark:bg-dark-bg text-charcoal-gray dark:text-dark-text transition-colors duration-200">
        <ThemeProvider>
          <ProgressProvider>
            <LoadingWrapper>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-0">
                  {children}
                </main>
              <footer className="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border py-6 sm:py-8 transition-colors duration-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">
                    © 2025 The Privacy Guide
                  </p>
                  
                  {/* Mobile: Simplified Footer */}
                  <div className="md:hidden">
                    <div className="flex justify-center space-x-6 text-sm">
                      <a href="/about" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        About
                      </a>
                      <a href="/tasks" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        Tasks
                      </a>
                      <a href="/settings" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        Settings
                      </a>
                    </div>
                  </div>

                  {/* Desktop: Full Footer */}
                  <div className="hidden md:block">
                    <div className="flex justify-center space-x-4 text-sm">
                      <a href="/about" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        About
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary">•</span>
                      <a href="/tasks" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        Privacy Tasks
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary">•</span>
                      <a href="/privacy" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        Privacy Policy
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary">•</span>
                      <a href="/settings" className="text-friendly-blue hover:text-blue-600 transition-colors">
                        Settings
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary">•</span>
                      <span className="text-gray-500 dark:text-dark-text-secondary">Made with ❤️ for privacy</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          </LoadingWrapper>
        </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
