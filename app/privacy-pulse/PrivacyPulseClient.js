'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PrivacyPulseClient({ articles = [], categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter articles by selected category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Data Breaches': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Consumer Alerts': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Tool Updates': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Legislation': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Studies': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-6">
            Privacy Pulse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Stay informed about the latest privacy news, data breaches, security updates, and consumer alerts. 
            We translate complex privacy developments into actionable insights for your digital safety.
          </p>
          
          {/* Call to Action Banner */}
          <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 border border-friendly-blue/20 dark:border-friendly-blue/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-charcoal-gray dark:text-dark-text text-lg font-semibold mb-4">
              Don't just read the news—improve your privacy.
            </p>
            <Link
              href="/tasks"
              className="inline-flex items-center bg-friendly-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start a Privacy Task
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-friendly-blue text-white'
                    : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-dark-border'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-friendly-blue text-white'
                      : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-dark-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/privacy-pulse/${article.id}`}
                className="block group"
              >
                <article className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(article.date)}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-charcoal-gray dark:text-dark-text mb-3 line-clamp-2 group-hover:text-friendly-blue transition-colors">
                    {article.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Related Tasks */}
                  {article.relatedTasks && article.relatedTasks.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Related Tasks:</p>
                      <div className="flex flex-wrap gap-1">
                        {article.relatedTasks.slice(0, 2).map((taskId) => (
                          <span
                            key={taskId}
                            className="text-xs bg-friendly-blue/10 text-friendly-blue px-2 py-1 rounded transition-colors"
                          >
                            {taskId.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Read More Indicator */}
                  <div className="flex items-center text-friendly-blue group-hover:text-blue-600 font-medium text-sm transition-colors">
                    Read Full Article
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedCategory === 'All' 
                  ? 'No privacy news articles are available yet. Check back soon!'
                  : `No articles found in the "${selectedCategory}" category.`
                }
              </p>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 text-friendly-blue hover:text-blue-600 font-medium"
                >
                  View all articles
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
