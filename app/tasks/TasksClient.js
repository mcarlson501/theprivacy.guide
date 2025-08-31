'use client';

import { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import TaskCard from '../../components/TaskCard';
import ProgressDashboard from '../../components/ProgressDashboard';

export default function TasksClient({ tasks, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showProgress, setShowProgress] = useState(false);
  
  const { completedTasks } = useProgress();

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
            Privacy Tasks
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protect your digital privacy with these actionable tasks. Start with quick wins 
            and work your way up to more advanced privacy techniques.
          </p>
        </div>

        {/* Collapsible Progress Dashboard */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="w-full bg-gradient-to-r from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-lg p-4 border border-friendly-blue/10 dark:border-friendly-blue/20 hover:from-friendly-blue/10 hover:to-success-teal/10 dark:hover:from-friendly-blue/15 dark:hover:to-success-teal/15 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-friendly-blue/20 dark:bg-friendly-blue/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-charcoal-gray dark:text-dark-text">
                    Progress Overview
                  </span>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <span>{completedTasks.length} tasks completed</span>
                  <span>•</span>
                  <span>{Math.round((completedTasks.length / tasks.length) * 100) || 0}% complete</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {showProgress ? 'Hide' : 'Show'}
                </span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showProgress ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          
          {showProgress && (
            <div className="mt-4">
              <ProgressDashboard tasks={tasks} />
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8 space-y-4">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-friendly-blue focus:border-friendly-blue bg-white dark:bg-dark-surface text-charcoal-gray dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400 text-base"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                selectedCategory === 'all'
                  ? 'bg-friendly-blue text-white'
                  : 'bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span className="hidden sm:inline">All Tasks ({tasks.length})</span>
              <span className="sm:hidden">All ({tasks.length})</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                  selectedCategory === category.name
                    ? 'bg-friendly-blue text-white'
                    : 'bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span className="hidden sm:inline">{category.name} ({category.count})</span>
                <span className="sm:hidden">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Showing {filteredTasks.length} of {tasks.length} tasks
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Tasks Grid */}
        {filteredTasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.766-6.295-2.082C5.546 12.59 5.364 12.24 5.1 12" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No tasks found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'No privacy tasks are available at the moment.'
              }
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
