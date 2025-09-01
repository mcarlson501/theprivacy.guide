'use client';

import Link from 'next/link';

export default function PrivacyPulseWidget({ recentNews = [] }) {
  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Data Breaches': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      'Consumer Alerts': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Tool Updates': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'Legislation': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'Studies': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
  };

  if (recentNews.length === 0) {
    return (
      <div className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-dark-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-charcoal-gray dark:text-dark-text">
            📰 Privacy Pulse
          </h2>
          <Link
            href="/privacy-pulse"
            className="text-friendly-blue hover:text-blue-600 text-sm font-medium transition-colors"
          >
            View All →
          </Link>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">
          Stay tuned for privacy news and security updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-dark-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-charcoal-gray dark:text-dark-text">
          📰 Privacy Pulse
        </h2>
        <Link
          href="/privacy-pulse"
          className="text-friendly-blue hover:text-blue-600 text-sm font-medium transition-colors"
        >
          View All →
        </Link>
      </div>
      
      <div className="space-y-4">
        {recentNews.map((article) => (
          <Link
            key={article.slug}
            href={`/privacy-pulse/${article.slug}`}
            className="block group"
          >
            <article className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-charcoal-gray dark:text-dark-text group-hover:text-friendly-blue transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <time className="text-gray-400 dark:text-gray-500 text-xs">
                      {formatDate(article.date)}
                    </time>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-friendly-blue transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
        <Link
          href="/privacy-pulse"
          className="flex items-center justify-center w-full py-2 px-4 bg-friendly-blue/10 dark:bg-friendly-blue/20 text-friendly-blue rounded-lg hover:bg-friendly-blue/20 dark:hover:bg-friendly-blue/30 transition-colors text-sm font-medium"
        >
          Read More Privacy News
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
