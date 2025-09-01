'use client';

import { useProgress } from '../context/ProgressContext';
import { getPrivacyLevel } from '../lib/levels';

export default function ProgressCard({ totalPossiblePoints = 1000, totalTasks = 12 }) {
  const { score, completedTasks, badges } = useProgress();
  
  // Use the actual task count passed from server components
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0;
  
  // Get current privacy level based on task completion percentage
  const currentLevel = getPrivacyLevel(progressPercentage);
  
  // Get most recent 3 badges
  const recentBadges = badges.slice(-3);

  return (
    <div className="card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-2">Your Privacy Journey</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Track your progress as you build better digital privacy habits
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-charcoal-gray dark:text-dark-text">Progress</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {completedTasks.length} / {totalTasks} tasks
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-friendly-blue to-success-teal h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {progressPercentage}% complete
          </div>
          <div className="flex items-center text-xs">
            <span className="text-lg mr-1">{currentLevel.emoji}</span>
            <span className={`font-medium text-charcoal-gray dark:text-purple-300`}>
              {currentLevel.title}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Score */}
        <div className="text-center">
          <div className="bg-success-teal/10 dark:bg-success-teal/20 rounded-lg p-3">
            <div className="flex items-center justify-center mb-1">
              <svg className="w-5 h-5 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-xl font-bold text-charcoal-gray dark:text-dark-text">
              {score.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Points Earned</div>
          </div>
        </div>

        {/* Tasks Completed */}
        <div className="text-center">
          <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 rounded-lg p-3">
            <div className="flex items-center justify-center mb-1">
              <svg className="w-5 h-5 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-charcoal-gray dark:text-dark-text">
              {completedTasks.length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Tasks Done</div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      {recentBadges.length > 0 && (
        <div>
          <h4 className="font-medium text-charcoal-gray dark:text-dark-text mb-2 flex items-center">
            <svg className="w-4 h-4 text-friendly-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Recent Badges {badges.length > 3 && `(${badges.length} total)`}
          </h4>
          <div className="flex flex-wrap gap-2">
            {recentBadges.map((badge) => (
              <span
                key={badge.id}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gradient-to-r from-friendly-blue to-success-teal text-white rounded-full"
                title={badge.name}
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Encouragement Message */}
      {score === 0 && (
        <div className="mt-4 p-3 bg-friendly-blue/5 dark:bg-friendly-blue/10 rounded-lg border border-friendly-blue/20 dark:border-friendly-blue/30">
          <p className="text-sm text-friendly-blue dark:text-blue-400 font-medium">
            🚀 Ready to start your privacy journey? Complete your first task to earn points and badges!
          </p>
        </div>
      )}

      {score > 0 && progressPercentage < 50 && (
        <div className="mt-4 p-3 bg-success-teal/5 dark:bg-success-teal/10 rounded-lg border border-success-teal/20 dark:border-success-teal/30">
          <p className="text-sm text-charcoal-gray dark:text-dark-text">
            🌟 Great start! You're building excellent privacy habits. Keep going!
          </p>
        </div>
      )}

      {progressPercentage >= 50 && progressPercentage < 100 && (
        <div className="mt-4 p-3 bg-success-teal/10 dark:bg-success-teal/20 rounded-lg border border-success-teal/30 dark:border-success-teal/40">
          <p className="text-sm text-charcoal-gray dark:text-dark-text">
            🔥 Awesome progress! You're more than halfway to becoming a privacy expert!
          </p>
        </div>
      )}

      {progressPercentage >= 100 && (
        <div className="mt-4 p-3 bg-gradient-to-r from-friendly-blue/10 to-success-teal/10 dark:from-friendly-blue/20 dark:to-success-teal/20 rounded-lg border border-success-teal/30 dark:border-success-teal/40">
          <p className="text-sm text-charcoal-gray dark:text-dark-text font-medium">
            🏆 Congratulations! You've completed all available privacy tasks. You're now a privacy champion!
          </p>
        </div>
      )}
    </div>
  );
}
