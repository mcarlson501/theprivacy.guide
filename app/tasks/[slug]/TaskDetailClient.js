'use client';

import { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { useConfetti } from '../../../lib/confetti';
import Link from 'next/link';
import { enhanceContentAccessibility, enhanceForScreenReaders } from '../../../lib/accessibility';

export default function TaskDetailClient({ task }) {
  const { isTaskCompleted, completeTask } = useProgress();
  const { triggerConfetti } = useConfetti();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);
  const completed = isTaskCompleted(task.id);

  const handleCompleteTask = async (event) => {
    if (!completed && !isAnimating) {
      setIsAnimating(true);
      
      // Trigger the confetti celebration from button position
      await triggerConfetti(event.currentTarget);
      
      // Complete the task
      completeTask(task.id, task.points, task.badgeId, task.badgeName);
      
      // Reset animation state
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  // Enhanced content parsing with better formatting and title extraction
  const parseContent = (html) => {
    const sections = html.split('<hr>').map(section => section.trim()).filter(Boolean);
    
    // Process overview section for better formatting and section extraction
    const processOverview = (content) => {
      // Split by h4 headers to create sections
      const parts = content.split(/<h4[^>]*>/);
      
      if (parts.length === 1) {
        // No h4 headers, return as single section
        const enhancedContent = enhanceForScreenReaders(enhanceContentAccessibility(
          content.replace(/\*\*(.+?)\*\*/g, '<strong class="highlight">$1</strong>')
        ));
        return [{
          title: '',
          content: enhancedContent
        }];
      }
      
      const overviewSections = [];
      
      // Process each section after h4 split
      for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        const titleMatch = part.match(/^([^<]+)/);
        const title = titleMatch ? titleMatch[1].replace(/\([^)]*\)/, '').trim() : '';
        
        // Remove the title from content and process
        const contentWithoutTitle = part.replace(/^[^<]+/, '');
        const processedContent = contentWithoutTitle
          .replace(/\*\*(.+?)\*\*/g, '<strong class="highlight">$1</strong>')
          .replace(/(?:\r\n|\r|\n){2,}/g, '</p><p class="mb-6">');
        
        // Apply accessibility enhancements
        const enhancedContent = enhanceForScreenReaders(enhanceContentAccessibility(processedContent));
        
        overviewSections.push({
          title: title,
          content: enhancedContent
        });
      }
      
      return overviewSections;
    };

    // Process steps section and extract titles
    const processSteps = (stepContent) => {
      // Extract the first h3 as the step title (HTML format)
      const titleMatch = stepContent.match(/<h3[^>]*>(.*?)<\/h3>/);
      const stepTitle = titleMatch ? titleMatch[1].replace(/Step \d+:\s*/, '') : '';
      
      // Remove the title from content and process the rest
      const contentWithoutTitle = stepContent.replace(/<h3[^>]*>.*?<\/h3>/, '');
      
      const processedContent = contentWithoutTitle
        .replace(/####\s+(.+?)(?=\n|$)/g, '<h4 class="sub-header">$1</h4>')
        .replace(/<h4[^>]*>(.*?)<\/h4>/g, '<h4 class="sub-header">$1</h4>')
        .replace(/\*\s+\*\*(.+?)\*\*:/g, '<div class="tip-box"><strong>$1:</strong>')
        .replace(/(?:\r\n|\r|\n){2,}/g, '</p><p class="mb-6">');
      
      // Apply accessibility enhancements
      const enhancedContent = enhanceForScreenReaders(enhanceContentAccessibility(processedContent));
      
      return {
        title: stepTitle,
        content: enhancedContent
      };
    };
    
    return {
      overview: processOverview(sections[0] || ''),
      steps: sections.slice(1).map(step => processSteps(step))
    };
  };

  const content = parseContent(task.contentHtml);

  const getCategoryColor = (category) => {
    const colors = {
      'Quick Win': 'bg-success-teal/10 dark:bg-success-teal/20 text-success-teal border-success-teal/20 dark:border-success-teal/30',
      'Essential': 'bg-friendly-blue/10 dark:bg-friendly-blue/20 text-friendly-blue border-friendly-blue/20 dark:border-friendly-blue/30',
      'Advanced': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/30',
      'Expert': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700/30',
    };
    return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600';
  };

  return (
    <div className="min-h-screen bg-calm-off-white dark:bg-dark-bg">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-friendly-blue text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border shadow-sm"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Link 
                href="/tasks" 
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-2 dark:focus:ring-offset-dark-surface rounded"
              >
                ← Back to Tasks
              </Link>
            </nav>

            {/* Task Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(task.category)}`}>
                    {task.category}
                  </span>
                  {completed && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-teal text-white">
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Completed
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-3">
                  {task.title}
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {task.description}
                </p>

                {/* Task Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span aria-label="Estimated time">{task.time}</span>
                  </div>
                  <div className="flex items-center text-friendly-blue font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span aria-label="Points earned">{task.points} points</span>
                  </div>
                  {task.badgeId && task.badgeName && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span aria-label="Badge reward">Earn "{task.badgeName}" badge</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleCompleteTask}
                  disabled={isAnimating}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    completed
                      ? 'bg-success-teal/10 text-success-teal border-2 border-success-teal/20 hover:bg-success-teal/20 focus:ring-success-teal'
                      : isAnimating
                        ? 'bg-friendly-blue/80 text-white scale-110 animate-pulse'
                        : 'bg-friendly-blue text-white hover:bg-friendly-blue/90 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-friendly-blue'
                  }`}
                  aria-pressed={completed}
                  aria-label={completed ? 'Task completed' : 'Mark task as complete'}
                >
                  {completed ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Completed
                    </span>
                  ) : isAnimating ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Celebrating...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Mark as Complete
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-dark-border">
            <nav className="-mb-px flex space-x-8" role="tablist" aria-label="Task information tabs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-2 dark:focus:ring-offset-dark-bg ${
                  activeTab === 'overview'
                    ? 'border-friendly-blue text-friendly-blue'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                role="tab"
                aria-selected={activeTab === 'overview'}
                aria-controls="overview-panel"
                id="overview-tab"
              >
                Why It Matters
              </button>
              <button
                onClick={() => setActiveTab('steps')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-2 dark:focus:ring-offset-dark-bg ${
                  activeTab === 'steps'
                    ? 'border-friendly-blue text-friendly-blue'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                role="tab"
                aria-selected={activeTab === 'steps'}
                aria-controls="steps-panel"
                id="steps-tab"
              >
                How To Do It
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-dark-surface rounded-lg shadow-sm border border-gray-200 dark:border-dark-border p-6">
          {activeTab === 'overview' && (
            <div 
              className="space-y-12"
              role="tabpanel"
              id="overview-panel"
              aria-labelledby="overview-tab"
            >
              {content.overview.map((section, sectionIndex) => (
                <section key={sectionIndex} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-12">
                  {section.title && (
                    <>
                      {/* Section Header */}
                      <div className="flex items-start space-x-4 mb-2">
                        <div className="w-12 h-12 bg-success-teal text-white rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          {/* Icon based on section content */}
                          {section.title.toLowerCase().includes('big picture') || section.title.toLowerCase().includes('important') ? (
                            // Eye icon for "The Big Picture" (vision/understanding)
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            // Checkmark shield icon for "What This Accomplishes" (benefits/protection)
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-semibold text-charcoal-gray dark:text-dark-text leading-tight">
                            {section.title}
                          </h2>
                        </div>
                      </div>

                      {/* Section Content */}
                      <div className="ml-16 -mt-2">
                        <div 
                          className="prose prose-lg max-w-none task-content-overview"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    </>
                  )}
                  
                  {!section.title && (
                    <div className="prose prose-lg max-w-none task-content-overview">
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
          
          {activeTab === 'steps' && (
            <div 
              className="space-y-8"
              role="tabpanel"
              id="steps-panel"
              aria-labelledby="steps-tab"
            >
              {content.steps.map((stepData, stepIndex) => (
                <section key={stepIndex} className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  {/* Step Header */}
                  <div className="flex items-start space-x-4 mb-2">
                    <div className="w-12 h-12 bg-friendly-blue text-white rounded-full flex items-center justify-center text-lg font-semibold flex-shrink-0" aria-hidden="true">
                      {stepIndex + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-charcoal-gray dark:text-dark-text leading-tight">
                        {stepData.title || `Step ${stepIndex + 1}`}
                      </h2>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="ml-16 -mt-2">
                    <div 
                      className="prose prose-lg max-w-none task-content-step"
                      dangerouslySetInnerHTML={{ __html: stepData.content }}
                    />
                  </div>
                </section>
              ))}
              
              {/* Complete Task Button at Bottom of Steps */}
              <div className="py-6 text-center">
                <button
                  onClick={handleCompleteTask}
                  className={`px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    completed
                      ? 'bg-success-teal/10 text-success-teal border-2 border-success-teal/20 hover:bg-success-teal/20 focus:ring-success-teal'
                      : 'bg-friendly-blue text-white hover:bg-friendly-blue/90 shadow-lg hover:shadow-xl focus:ring-friendly-blue'
                  }`}
                  aria-pressed={completed}
                  aria-label={completed ? 'Task completed' : 'Mark task as complete'}
                >
                  {completed ? (
                    <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Task Completed!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Mark Task as Complete
                    </span>
                  )}
                </button>
                
                {/* Encouragement text for completed tasks */}
                {completed && (
                  <p className="mt-4 text-gray-600">
                    Great job! You've successfully completed this privacy task. 
                    <br />
                    <Link 
                      href="/tasks" 
                      className="text-friendly-blue hover:text-friendly-blue/80 font-medium focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-2 rounded"
                    >
                      Continue to more tasks →
                    </Link>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Styles */}
      <style jsx>{`
        /* Overview Section Styling - Clean and minimal */
        .task-content-overview .highlight {
          background: linear-gradient(120deg, #50E3C2 0%, #4A90E2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }
        
        /* Steps Section Styling - Improved spacing and hierarchy */
        .task-content-step .sub-header {
          color: #4A90E2;
          font-weight: 600;
          font-size: 1.375rem;
          margin: 2rem 0 1.5rem 0;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #E5E7EB;
          line-height: 1.4;
        }
        
        .task-content-step .tip-box {
          background: linear-gradient(135deg, #F8F9FA 0%, #E8F4FD 100%);
          border: 1px solid #D1D5DB;
          border-left: 4px solid #50E3C2;
          border-radius: 12px;
          padding: 2rem;
          margin: 2.5rem 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .task-content-step .tip-box strong {
          color: #4A90E2;
          font-weight: 600;
          font-size: 1.125rem;
          display: block;
          margin-bottom: 1rem;
        }
        
        /* General Typography - Better spacing and readability */
        .task-content-overview strong,
        .task-content-step strong {
          color: #1F2937;
          font-weight: 600;
        }
        
        .task-content-overview ul,
        .task-content-step ul,
        .task-content-overview ol,
        .task-content-step ol {
          margin: 2rem 0;
          padding-left: 0;
          list-style: none;
        }
        
        .task-content-overview li,
        .task-content-step li {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          position: relative;
          padding-left: 2rem;
          color: #374151;
        }
        
        .task-content-overview li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #4A90E2;
          font-weight: bold;
          font-size: 1.25rem;
        }
        
        .task-content-step li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #50E3C2;
          font-weight: bold;
          font-size: 1.5rem;
        }
        
        .task-content-overview p,
        .task-content-step p {
          margin-bottom: 2rem;
          line-height: 1.8;
          color: #374151;
          font-size: 1.125rem;
        }
        
        /* Remove top margin from first elements in step content */
        .task-content-step p:first-child,
        .task-content-step ul:first-child,
        .task-content-step ol:first-child,
        .task-content-step h4:first-child,
        .task-content-overview p:first-child,
        .task-content-overview ul:first-child,
        .task-content-overview ol:first-child,
        .task-content-overview h4:first-child {
          margin-top: 0;
        }
        
        .task-content-overview p.mb-6,
        .task-content-step p.mb-6 {
          margin-bottom: 2rem;
        }
        
        .task-content-overview p:first-of-type,
        .task-content-step p:first-of-type {
          font-size: 1.25rem;
          color: #1F2937;
          font-weight: 500;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        
        /* Code and Links - Subtle styling */
        .task-content-overview code,
        .task-content-step code {
          background: #F3F4F6;
          color: #6366F1;
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 1rem;
          border: 1px solid #E5E7EB;
        }
        
        .task-content-overview a,
        .task-content-step a {
          color: #4A90E2;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #4A90E2;
          transition: all 0.2s;
        }
        
        .task-content-overview a:hover,
        .task-content-step a:hover {
          color: #2563EB;
          border-bottom-color: #2563EB;
        }
        
        /* Blockquotes - Clean and spacious */
        .task-content-overview blockquote,
        .task-content-step blockquote {
          border-left: 4px solid #50E3C2;
          background: #F8F9FA;
          padding: 2rem 2.5rem;
          margin: 3rem 0;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #4B5563;
          position: relative;
          font-size: 1.125rem;
        }
        
        /* Headers - Clean and well-spaced */
        .task-content-overview h1,
        .task-content-overview h2,
        .task-content-overview h3,
        .task-content-overview h4,
        .task-content-step h1,
        .task-content-step h2,
        .task-content-step h3,
        .task-content-step h4 {
          color: #1F2937;
          font-weight: 600;
          margin: 3rem 0 1.5rem 0;
          line-height: 1.4;
        }
        
        .task-content-overview h4,
        .task-content-step h4 {
          font-size: 1.25rem;
          color: #4A90E2;
          margin: 2rem 0 1rem 0;
        }
        
        /* Mobile Responsive */
        @media (max-width: 640px) {
          .task-content-step .sub-header {
            font-size: 1.25rem;
            margin: 1.5rem 0 1rem 0;
          }
          
          .task-content-overview p,
          .task-content-step p {
            font-size: 1rem;
          }
          
          .task-content-overview p:first-of-type,
          .task-content-step p:first-of-type {
            font-size: 1.125rem;
          }
          
          .task-content-step .tip-box {
            padding: 1.5rem;
            margin: 2rem 0;
          }
        }
      `}</style>
    </div>
  );
}
