'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useProgress } from '../context/ProgressContext';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { badges, score } = useProgress();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  // Focus trap: trap Tab/Shift+Tab inside the menu, close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const menuElement = menuRef.current;
    if (!menuElement) return;

    const focusableSelector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableElements = menuElement.querySelectorAll(focusableSelector);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        ref={triggerRef}
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors focus:outline-none focus:ring-2 focus:ring-friendly-blue/50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
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
          <div ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-dark-bg shadow-2xl z-50 md:hidden">
            <div className="flex flex-col h-full bg-white dark:bg-dark-bg">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg">
                <h2 className="text-lg font-bold text-charcoal-gray dark:text-dark-text">Menu</h2>
                <button 
                  onClick={closeMenu}
                  className="p-1.5 rounded-md text-charcoal-gray dark:text-dark-text hover:text-friendly-blue hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main Content - Tighter spacing */}
              <div className="flex-1 p-4 flex flex-col bg-white dark:bg-dark-bg">
                {/* Navigation Links - Closer together */}
                <div className="flex-1 flex flex-col justify-center">
                  <nav className="space-y-1">
                    <Link 
                      href="/" 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2.5 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-base font-medium"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/tasks" 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2.5 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-base font-medium"
                    >
                      Privacy Tasks
                    </Link>
                    <Link 
                      href="/about" 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2.5 rounded-lg text-charcoal-gray dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-friendly-blue transition-colors text-base font-medium"
                    >
                      About
                    </Link>
                  </nav>
                </div>

                {/* Bottom Section - Stats only */}
                <div className="mt-4">
                  {/* Quick Stats */}
                  <div className="p-3 bg-friendly-blue/10 dark:bg-friendly-blue/20 rounded-lg border border-friendly-blue/20 dark:border-friendly-blue/30">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="text-xl font-bold text-charcoal-gray dark:text-dark-text">{score}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Points</div>
                      </div>
                      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                      <div className="text-center flex-1">
                        <div className="text-xl font-bold text-charcoal-gray dark:text-dark-text">{badges.length}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Badges</div>
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
