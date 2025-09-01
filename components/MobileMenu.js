'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProgress } from '../context/ProgressContext';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { badges, score } = useProgress();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
        aria-label="Open menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 z-40 md:hidden" 
            onClick={closeMenu} 
          />
          
          {/* Full Height Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark-bg shadow-2xl z-50 md:hidden">
            <div className="flex flex-col h-full bg-white dark:bg-dark-bg">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg">
                <h2 className="text-xl font-bold text-charcoal-gray dark:text-dark-text">Menu</h2>
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-md text-charcoal-gray dark:text-dark-text hover:text-friendly-blue hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main Content - Tighter spacing */}
              <div className="flex-1 p-6 flex flex-col bg-white dark:bg-dark-bg">
                {/* Navigation Links - Closer together */}
                <div className="flex-1 flex flex-col justify-center">
                  <nav className="space-y-2">
                    <Link 
                      href="/" 
                      onClick={closeMenu}
                      className="flex items-center px-4 py-3 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-lg font-medium"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/tasks" 
                      onClick={closeMenu}
                      className="flex items-center px-4 py-3 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-lg font-medium"
                    >
                      Privacy Tasks
                    </Link>
                    <Link 
                      href="/privacy-pulse" 
                      onClick={closeMenu}
                      className="flex items-center px-4 py-3 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-lg font-medium"
                    >
                      Privacy Pulse
                    </Link>
                    <Link 
                      href="/about" 
                      onClick={closeMenu}
                      className="flex items-center px-4 py-3 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-lg font-medium"
                    >
                      About
                    </Link>
                  </nav>
                </div>

                {/* Bottom Section - Stats only */}
                <div className="mt-6">
                  {/* Quick Stats */}
                  <div className="p-4 bg-friendly-blue/10 dark:bg-friendly-blue/20 rounded-lg border border-friendly-blue/20 dark:border-friendly-blue/30">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-charcoal-gray dark:text-dark-text">{score}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Points</div>
                      </div>
                      <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-charcoal-gray dark:text-dark-text">{badges.length}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Badges</div>
                      </div>
                    </div>
                  </div>

                  {/* Optional Theme Toggle - Uncomment if needed */}
                  {/* 
                  <div className="flex items-center justify-center mt-4">
                    <ThemeToggle />
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
