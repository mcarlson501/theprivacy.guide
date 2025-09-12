import './globals.css'
import '../styles/accessibility.css'
import '../styles/fonts.css'
import { ProgressProvider } from '../context/ProgressContext'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '../components/Header'
import ThemeToggle from '../components/ThemeToggle'
import LoadingWrapper from '../components/LoadingWrapper'

export const metadata = {
  title: 'The Privacy Guide - Take Control of Your Digital Privacy',
  description: 'A gamified, user-friendly guide to help you improve your digital privacy through simple, actionable tasks. Build better privacy habits with our step-by-step approach.',
  keywords: 'privacy, digital privacy, online security, privacy guide, data protection',
  icons: {
    icon: [
      {
        url: '/images/logo.png?v=2',
        type: 'image/png',
      },
      {
        url: '/images/logo.png?v=2',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/logo.png?v=2',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://gc.zgo.at http://gc.zgo.at; connect-src 'self' https://theprivacyguide.goatcounter.com https://gc.zgo.at; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
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
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-4">
                    © 2025 The Privacy Guide
                  </p>
                  
                  {/* Mobile: Simplified Footer */}
                  <div className="md:hidden">
                    <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-xs">
                      <a href="/about" className="text-friendly-blue hover:text-blue-600 transition-colors px-1 py-1 focus:outline-none focus:ring-2 focus:ring-friendly-blue/50 rounded whitespace-nowrap">
                        About
                      </a>
                      <a href="/tasks" className="text-friendly-blue hover:text-blue-600 transition-colors px-1 py-1 focus:outline-none focus:ring-2 focus:ring-friendly-blue/50 rounded whitespace-nowrap">
                        Tasks
                      </a>
                      <a href="/privacy" className="text-friendly-blue hover:text-blue-600 transition-colors px-1 py-1 focus:outline-none focus:ring-2 focus:ring-friendly-blue/50 rounded whitespace-nowrap">
                        Privacy
                      </a>
                      <a href="/settings" className="text-friendly-blue hover:text-blue-600 transition-colors px-1 py-1 focus:outline-none focus:ring-2 focus:ring-friendly-blue/50 rounded whitespace-nowrap">
                        Settings
                      </a>
                    </div>
                  </div>

                  {/* Desktop: Full Footer */}
                  <div className="hidden md:block">
                    <div className="flex justify-center items-center text-sm">
                      <a href="/about" className="text-friendly-blue hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-friendly-blue/50">
                        About
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary px-2">•</span>
                      <a href="/tasks" className="text-friendly-blue hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-friendly-blue/50">
                        Privacy Tasks
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary px-2">•</span>
                      <a href="/privacy" className="text-friendly-blue hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-friendly-blue/50">
                        Privacy Policy
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary px-2">•</span>
                      <a href="/settings" className="text-friendly-blue hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-friendly-blue/50">
                        Settings
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary px-2">•</span>
                      <a href="https://github.com/mcarlson501/theprivacy.guide" target="_blank" rel="noopener noreferrer" className="text-friendly-blue hover:text-blue-600 transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-friendly-blue/50">
                        GitHub
                      </a>
                      <span className="text-gray-300 dark:text-dark-text-secondary px-2">•</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          </LoadingWrapper>
        </ProgressProvider>
        </ThemeProvider>
        <script data-goatcounter="https://theprivacyguide.goatcounter.com/count"
                async src="https://gc.zgo.at/count.js"></script>
      </body>
    </html>
  )
}
