'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { getPrivacyLevel } from '../lib/levels';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { score, badges, completedTasks } = useProgress();

  // Use the current actual task count 
  // Updated to match current number of tasks in content/tasks/ directory
  const totalTasks = 21; // All privacy tasks in content/tasks/ directory
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0;
  const currentLevel = getPrivacyLevel(progressPercentage);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      const headerHeight = 80; // Approximate header height
      
      if (currentScrollY <= 0) {
        // At top of page, header fully visible
        setHeaderOffset(0);
      } else {
        // Calculate new header offset based on scroll direction and momentum
        let newOffset = headerOffset;
        
        if (scrollDifference > 0) {
          // Scrolling down - move header up (hide it)
          newOffset = Math.min(headerHeight, headerOffset + scrollDifference * 0.8);
        } else {
          // Scrolling up - move header down (show it)
          newOffset = Math.max(0, headerOffset + scrollDifference * 1.2);
        }
        
        setHeaderOffset(newOffset);
      }
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    // Throttle the scroll event for smoother performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [headerOffset, lastScrollY]);

  return (
    <header 
      className="sticky top-0 z-50 bg-white dark:bg-dark-bg shadow-sm border-b border-gray-200 dark:border-dark-border backdrop-blur-sm bg-white/95 dark:bg-dark-bg/95 transition-transform duration-200 ease-out"
      style={{ transform: `translateY(-${headerOffset}px)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-8">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                {/* Logo - Update the src to match your logo filename */}
                <div className="w-8 h-8 mr-2 flex items-center justify-center">
                  <Image
                    src="/images/logo.png?v=2"
                    alt="The Privacy Guide Logo"
                    width={32}
                    height={32}
                    className="max-w-8 max-h-8 object-contain"
                    priority
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold text-charcoal-gray dark:text-dark-text truncate">
                  The Privacy Guide
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/" 
                className="text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/tasks" 
                className="text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue font-medium transition-colors"
              >
                Tasks
              </Link>
              <Link 
                href="/privacy-pulse" 
                className="text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue font-medium transition-colors"
              >
                Privacy Pulse
              </Link>
              <Link 
                href="/about" 
                className="text-charcoal-gray dark:text-dark-text hover:text-friendly-blue dark:hover:text-friendly-blue font-medium transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Progress Indicator - Desktop Only */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Level Display */}
            <div className="flex items-center bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
              <span className="text-lg mr-1">{currentLevel.emoji}</span>
              <span className={`text-sm font-semibold ${currentLevel.color} dark:text-purple-300`}>
                {currentLevel.title}
              </span>
            </div>

            {/* Score Display */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-success-teal/10 dark:bg-success-teal/20 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-success-teal mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-charcoal-gray dark:text-dark-text">
                  {score.toLocaleString()} pts
                </span>
              </div>
            </div>

            {/* Badge Count */}
            {badges.length > 0 && (
              <div className="flex items-center bg-friendly-blue/10 dark:bg-friendly-blue/20 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-friendly-blue mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-charcoal-gray dark:text-dark-text">
                  {badges.length} {badges.length === 1 ? 'badge' : 'badges'}
                </span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
