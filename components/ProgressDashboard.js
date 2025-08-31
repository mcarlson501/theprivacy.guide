'use client';

import { useProgress } from '../context/ProgressContext';
import { getPrivacyLevel, getNextLevel } from '../lib/levels';
import Link from 'next/link';

export default function ProgressDashboard({ tasks }) {
  const { score, completedTasks, badges, isTaskCompleted } = useProgress();
  
  // Calculate progress statistics
  const totalTasks = tasks.length;
  const completedCount = completedTasks.length;
  const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  
  // Calculate points possible
  const totalPointsPossible = tasks.reduce((sum, task) => sum + (task.points || 0), 0);
  const earnedPoints = tasks
    .filter(task => isTaskCompleted(task.id))
    .reduce((sum, task) => sum + (task.points || 0), 0);
  
  // Get current level and next level
  const currentLevel = getPrivacyLevel(progressPercentage);
  const nextLevel = getNextLevel(progressPercentage);

  // Get recent badges (last 3)
  const recentBadges = badges.slice(-3);

  return (
    <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-2xl p-4 sm:p-6 border border-friendly-blue/10 dark:border-friendly-blue/20 mb-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-charcoal-gray dark:text-dark-text">Your Progress</h2>
        <Link 
          href="/settings" 
          className="text-xs sm:text-sm text-friendly-blue hover:text-friendly-blue/80 font-medium"
        >
          <span className="hidden sm:inline">Manage Progress →</span>
          <span className="sm:hidden">Settings</span>
        </Link>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Overall Progress */}
        <div className="bg-white dark:bg-dark-surface rounded-xl p-4 shadow-sm border border-gray-100 dark:border-dark-border">
          <div className="text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                  className="dark:stroke-gray-600"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#4A90E2"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${progressPercentage * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-charcoal-gray dark:text-dark-text">{progressPercentage}%</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Tasks Complete</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{completedCount} of {totalTasks}</div>
          </div>
        </div>

        {/* Points */}
        <div className="bg-white dark:bg-dark-surface rounded-xl p-4 shadow-sm border border-gray-100 dark:border-dark-border">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-friendly-blue/10 dark:bg-friendly-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-charcoal-gray dark:text-dark-text">{score}</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Points Earned</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">of {totalPointsPossible} possible</div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white dark:bg-dark-surface rounded-xl p-4 shadow-sm border border-gray-100 dark:border-dark-border">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-teal/10 dark:bg-success-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-charcoal-gray dark:text-dark-text">{badges.length}</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Badges Earned</div>
            {recentBadges.length > 0 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                Latest: {recentBadges[recentBadges.length - 1]?.name}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Level Progress Section */}
      <div className="bg-white dark:bg-dark-surface rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border mb-4 sm:mb-6">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl sm:text-3xl">{currentLevel.emoji}</span>
            <h3 className={`text-xl sm:text-2xl font-bold mt-2 ${currentLevel.color} dark:text-purple-300`}>
              {currentLevel.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">
              {progressPercentage}% Privacy Protection Complete
            </p>
          </div>
          
          {nextLevel && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>Progress to {nextLevel.title}</span>
                <span>{nextLevel.pointsNeeded}% remaining</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-friendly-blue to-success-teal h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.max(0, ((progressPercentage - currentLevel.min) / (nextLevel.threshold - currentLevel.min)) * 100)}%` 
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Next: {nextLevel.title} at {nextLevel.threshold}% completion
              </p>
            </div>
          )}
          
          {!nextLevel && (
            <div className="mt-4 text-success-teal">
              <p className="font-medium">🎉 Maximum level achieved!</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">You're a true Privacy Master!</p>
            </div>
          )}
        </div>
      </div>

      {/* Motivational Message */}
      {progressPercentage === 0 && (
        <div className="text-center py-4">
          <p className="text-gray-600 dark:text-gray-300">
            🚀 Ready to start your privacy journey? Pick your first task below!
          </p>
        </div>
      )}
      
      {progressPercentage > 0 && progressPercentage < 100 && (
        <div className="text-center py-4">
          <p className="text-gray-600 dark:text-gray-300">
            🎯 Keep going! You're {progressPercentage}% of the way to complete privacy protection.
          </p>
        </div>
      )}
      
      {progressPercentage === 100 && (
        <div className="text-center py-4">
          <p className="text-success-teal font-medium">
            🎉 Congratulations! You've completed all available privacy tasks!
          </p>
        </div>
      )}
    </div>
  );
}
