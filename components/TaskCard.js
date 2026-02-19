'use client';

import { useProgress } from '../context/ProgressContext';
import { getCategoryColor } from '../lib/categories';
import Link from 'next/link';

export default function TaskCard({ task }) {
  const { isTaskCompleted } = useProgress();
  const completed = isTaskCompleted(task.id);

  return (
    <div className={`card hover:shadow-lg transition-all duration-200 h-full flex flex-col ${completed ? 'ring-2 ring-success-teal/30 bg-success-teal/5' : 'hover:shadow-lg'}`}>
      {/* Task Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(task.category)}`}>
              {task.category}
            </span>
            {completed && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success-teal text-white">
                <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Completed</span>
                <span className="sm:hidden">Done</span>
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-2 leading-tight">
            {task.title}
          </h3>
        </div>
      </div>

      {/* Task Description - Fixed height with line clamping */}
      <div className="flex-1 mb-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed min-h-[4.5rem] overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {task.description}
        </p>
      </div>

      {/* Task Meta Information - Always positioned consistently */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="truncate">{task.time}</span>
        </div>
        <div className="flex items-center text-sm font-medium text-friendly-blue">
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="whitespace-nowrap">{task.points} points</span>
        </div>
      </div>

      {/* Badge Information - Consistent spacing */}
      {task.badgeId && task.badgeName && (
        <div className="mb-4 p-3 bg-gradient-to-r from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-lg border border-friendly-blue/10 dark:border-friendly-blue/20">
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 text-friendly-blue mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 leading-tight">
              Earn the <span className="font-medium text-charcoal-gray dark:text-dark-text">"{task.badgeName}"</span> badge
            </span>
          </div>
        </div>
      )}

      {/* Action Button - Always at bottom */}
      <div className="mt-auto">
        <Link
          href={`/tasks/${task.id}`}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 inline-block text-center text-sm sm:text-base ${
            completed
              ? 'bg-success-teal/10 dark:bg-success-teal/20 text-success-teal border border-success-teal/20 dark:border-success-teal/30 hover:bg-success-teal/20 dark:hover:bg-success-teal/30'
              : 'btn-primary hover:shadow-md'
          }`}
        >
          {completed ? 'Review Task' : 'Start Task'}
        </Link>
      </div>
    </div>
  );
}
