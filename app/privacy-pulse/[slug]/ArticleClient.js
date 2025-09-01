'use client';

import Link from 'next/link';

export default function ArticleClient({ article }) {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/privacy-pulse"
            className="inline-flex items-center text-friendly-blue hover:text-blue-600 font-medium transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Privacy Pulse
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-border">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <time className="text-gray-500 dark:text-gray-400 font-medium">
              {formatDate(article.date)}
            </time>
            {article.source && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Source: {article.source}
              </div>
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="border-l-4 border-friendly-blue pl-6 bg-friendly-blue/5 dark:bg-friendly-blue/10 py-4 rounded-r-lg">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {article.summary}
            </p>
          </div>
        </header>

        {/* Related Tasks - Moved to top for prominence */}
        {article.relatedTasks && article.relatedTasks.length > 0 && (
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-border mb-8">
            <div className="bg-gradient-to-br from-friendly-blue/10 to-success-teal/10 dark:from-friendly-blue/20 dark:to-success-teal/20 rounded-xl p-6 border border-friendly-blue/20 dark:border-friendly-blue/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-friendly-blue/20 dark:bg-friendly-blue/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-friendly-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-gray dark:text-dark-text">
                  🚨 Take Action: Protect Yourself Now
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                These privacy tasks can help protect you from this specific type of breach:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {article.relatedTasks.map((taskId) => (
                  <Link
                    key={taskId}
                    href={`/tasks/${taskId}`}
                    className="group flex items-center p-4 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border hover:shadow-lg hover:border-friendly-blue/50 dark:hover:border-friendly-blue/50 transition-all duration-200"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-charcoal-gray dark:text-dark-text capitalize mb-1 group-hover:text-friendly-blue dark:group-hover:text-blue-400 transition-colors">
                        {taskId.replace(/-/g, ' ')}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Privacy Task
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-friendly-blue opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="bg-white dark:bg-dark-surface rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border mb-8">
          <div className="p-6 lg:p-8">
            <div 
              className="article-content prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-charcoal-gray dark:prose-headings:text-dark-text
                prose-h2:text-3xl prose-h2:font-bold prose-h2:border-b-2 prose-h2:border-gray-200 dark:prose-h2:border-gray-700
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-friendly-blue dark:prose-h3:text-blue-400
                prose-h4:text-xl prose-h4:font-semibold
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:bg-yellow-50 dark:prose-blockquote:bg-yellow-900/20
                prose-blockquote:rounded-r-lg prose-blockquote:text-yellow-800 dark:prose-blockquote:text-yellow-200
                prose-blockquote:font-medium prose-blockquote:not-italic
                prose-strong:font-semibold prose-strong:text-charcoal-gray dark:prose-strong:text-white
                prose-ul:space-y-2 prose-ol:space-y-2
                prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed
                prose-hr:border-gray-200 dark:prose-hr:border-gray-700
                prose-a:text-friendly-blue hover:prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-border">
          <div className="bg-gradient-to-br from-friendly-blue to-success-teal dark:from-indigo-800 dark:to-teal-800 rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Stay Protected</h3>
            <p className="text-blue-100 dark:text-gray-200 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Don't let privacy news overwhelm you. Take action with our step-by-step privacy tasks designed to keep you safe.
            </p>
            <Link
              href="/tasks"
              className="inline-flex items-center bg-white dark:bg-gray-800 text-friendly-blue dark:text-blue-400 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
            >
              View All Privacy Tasks
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
