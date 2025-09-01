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
    <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-xl p-4 border border-friendly-blue/10 dark:border-friendly-blue/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-charcoal-gray dark:text-dark-text">Your Progress</h2>
        <Link 
          href="/settings" 
          className="text-xs text-friendly-blue hover:text-friendly-blue/80 font-medium"
        >
          Manage Progress →
        </Link>
      </div>

      {/* Four Equal Widgets in One Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {/* Overall Progress with Circle */}
        <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[140px]">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
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
              <span className="text-sm font-bold text-charcoal-gray dark:text-dark-text">{progressPercentage}%</span>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">Tasks Complete</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{completedCount} of {totalTasks}</div>
        </div>

        {/* Points with Icon */}
        <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-12 h-12 bg-friendly-blue/10 dark:bg-friendly-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-6 h-6 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="text-lg font-bold text-charcoal-gray dark:text-dark-text mb-1">{score}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">Points Earned</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">of {totalPointsPossible} possible</div>
        </div>

        {/* Badges with Icon */}
        <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-12 h-12 bg-success-teal/10 dark:bg-success-teal/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-6 h-6 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-lg font-bold text-charcoal-gray dark:text-dark-text mb-1">{badges.length}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">Badges Earned</div>
          {recentBadges.length > 0 && (
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Latest: {recentBadges[recentBadges.length - 1]?.name}
            </div>
          )}
        </div>

        {/* Current Level with Emoji */}
        <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-[140px]">
          <div className="text-3xl mb-2">{currentLevel.emoji}</div>
          <div className={`text-sm font-bold ${currentLevel.color} dark:text-purple-300 mb-1`}>
            {currentLevel.title}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">Current Level</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {progressPercentage}% Complete
          </div>
        </div>
      </div>
    </div>
  );
}
