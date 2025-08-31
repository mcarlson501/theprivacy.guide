'use client';

import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';

export default function TaskModal({ task, isOpen, onClose }) {
  const { completeTask, isTaskCompleted } = useProgress();
  const [activeTab, setActiveTab] = useState('overview');
  const completed = task ? isTaskCompleted(task.id) : false;

  if (!isOpen || !task) return null;

  const handleCompleteTask = () => {
    if (!completed) {
      completeTask(task.id, task.points, task.badgeId, task.badgeName);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Enhanced content parsing with better formatting and title extraction
  const parseContent = (html) => {
    const sections = html.split('<hr>').map(section => section.trim()).filter(Boolean);
    
    // Process overview section for better formatting
    const processOverview = (content) => {
      return content
        .replace(/\*\*(.+?)\*\*/g, '<strong class="highlight">$1</strong>')
        .replace(/(?:\r\n|\r|\n){2,}/g, '</p><p class="mb-4">');
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
        .replace(/(?:\r\n|\r|\n){2,}/g, '</p><p class="mb-4">');
      
      return {
        title: stepTitle,
        content: processedContent
      };
    };
    
    return {
      overview: processOverview(sections[0] || ''),
      steps: sections.slice(1).map(step => processSteps(step))
    };
  };

  const content = task.contentHtml ? parseContent(task.contentHtml) : { overview: '', steps: [] };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content max-w-4xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center space-x-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              task.category === 'Quick Win' ? 'bg-success-teal/10 text-success-teal border border-success-teal/20' :
              task.category === 'Essential' ? 'bg-friendly-blue/10 text-friendly-blue border border-friendly-blue/20' :
              task.category === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
              task.category === 'Expert' ? 'bg-red-100 text-red-700 border border-red-200' :
              'bg-gray-100 text-gray-700 border border-gray-200'
            }`}>
              {task.category}
            </span>
            {completed && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-success-teal text-white">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Completed
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Task Header */}
        <div className="px-6 py-6 bg-gradient-to-r from-friendly-blue/5 to-success-teal/5">
          <h1 className="text-3xl font-bold text-charcoal-gray mb-3">
            {task.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {task.description}
          </p>
          
          {/* Task Meta Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-gray">Time needed</div>
                  <div>{task.time}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-gray">Points earned</div>
                  <div className="text-friendly-blue font-semibold">{task.points} points</div>
                </div>
              </div>
            </div>
            
            {task.badgeId && task.badgeName && (
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium text-charcoal-gray">Badge unlock</div>
                    <div className="text-purple-600 font-semibold">"{task.badgeName}"</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 px-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-friendly-blue text-friendly-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Why It Matters
            </button>
            <button
              onClick={() => setActiveTab('steps')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'steps'
                  ? 'border-friendly-blue text-friendly-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              How To Do It
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="px-8 py-8 max-h-96 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div 
                className="prose prose-lg max-w-none task-content-overview"
                dangerouslySetInnerHTML={{ __html: content.overview }}
              />
            </div>
          )}
          
          {activeTab === 'steps' && (
            <div className="space-y-8">
              {content.steps.map((stepData, stepIndex) => (
                <div key={stepIndex} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Step Header with extracted title */}
                  <div className="bg-gradient-to-r from-friendly-blue/5 to-success-teal/5 px-6 py-5 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-friendly-blue text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-charcoal-gray leading-tight">
                          {stepData.title || `Step ${stepIndex + 1}`}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Step Content with improved spacing */}
                  <div className="px-8 py-8">
                    <div 
                      className="prose max-w-none task-content-step"
                      dangerouslySetInnerHTML={{ __html: stepData.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              {activeTab === 'overview' ? 'Learning about this task' : 'Ready to take action'}
            </span>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'overview' ? 'bg-friendly-blue' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'steps' ? 'bg-friendly-blue' : 'bg-gray-300'}`}></div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Close
            </button>
            
            {completed ? (
              <div className="flex items-center text-success-teal font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Task Completed!
              </div>
            ) : (
              <button
                onClick={handleCompleteTask}
                className="btn-secondary hover:shadow-md bg-success-teal text-white hover:bg-success-teal/90 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mark as Complete
              </button>
            )}
          </div>
        </div>
      </div>

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
          font-size: 1.25rem;
          margin: 2rem 0 1rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #E5E7EB;
          line-height: 1.4;
        }
        
        .task-content-step .tip-box {
          background: linear-gradient(135deg, #F8F9FA 0%, #E8F4FD 100%);
          border: 1px solid #D1D5DB;
          border-left: 4px solid #50E3C2;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .task-content-step .tip-box strong {
          color: #4A90E2;
          font-weight: 600;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.75rem;
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
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
        }
        
        .task-content-overview li,
        .task-content-step li {
          margin-bottom: 1rem;
          line-height: 1.7;
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
          font-size: 1.1rem;
        }
        
        .task-content-step li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #50E3C2;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .task-content-overview p,
        .task-content-step p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #374151;
        }
        
        .task-content-overview p.mb-4,
        .task-content-step p.mb-4 {
          margin-bottom: 1.5rem;
        }
        
        .task-content-overview p:first-of-type,
        .task-content-step p:first-of-type {
          font-size: 1.125rem;
          color: #1F2937;
          font-weight: 500;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        /* Code and Links - Subtle styling */
        .task-content-overview code,
        .task-content-step code {
          background: #F3F4F6;
          color: #6366F1;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
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
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #4B5563;
          position: relative;
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
          margin: 2rem 0 1rem 0;
          line-height: 1.4;
        }
        
        .task-content-overview h4,
        .task-content-step h4 {
          font-size: 1.125rem;
          color: #4A90E2;
          margin: 1.5rem 0 0.75rem 0;
        }
        
        /* Mobile Responsive */
        @media (max-width: 640px) {
          .task-content-step .sub-header {
            font-size: 1.125rem;
            margin: 1.5rem 0 0.75rem 0;
          }
          
          .task-content-overview p:first-of-type,
          .task-content-step p:first-of-type {
            font-size: 1rem;
          }
          
          .task-content-step .tip-box {
            padding: 1rem;
            margin: 1.5rem 0;
          }
        }
      `}</style>
    </div>
  );
}
