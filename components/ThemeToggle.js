'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();

  // Don't render until theme is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full animate-pulse">
        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded mr-1"></div>
        <span className="text-sm font-semibold text-gray-400 dark:text-gray-500">Theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center px-3 py-1 rounded-full text-sm font-semibold
        transition-all duration-200 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-1
        focus:ring-offset-white dark:focus:ring-offset-dark-bg
        h-8
        ${isDarkMode 
          ? 'bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20' 
          : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
        }
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <>
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span>Dark</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path 
              fillRule="evenodd" 
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>Light</span>
        </>
      )}
    </button>
  );
}
