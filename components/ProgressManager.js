'use client';

import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';

export default function ProgressManager() {
  const { 
    score, 
    completedTasks, 
    badges, 
    exportProgress, 
    importProgress, 
    clearProgress 
  } = useProgress();
  
  const [showExport, setShowExport] = useState(false);
  const [importData, setImportData] = useState('');
  const [importMessage, setImportMessage] = useState('');
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [storageInfo, setStorageInfo] = useState(null);

  // Calculate storage usage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const data = exportProgress();
        const sizeInBytes = new Blob([data]).size;
        const sizeInKB = (sizeInBytes / 1024).toFixed(2);
        setStorageInfo({ sizeInKB, sizeInBytes });
      } catch (error) {
        console.error('Failed to calculate storage size:', error);
      }
    }
  }, [score, completedTasks, badges, exportProgress]);

  const handleExport = () => {
    const data = exportProgress();
    setShowExport(true);
    
    // Copy to clipboard
    navigator.clipboard.writeText(data).then(() => {
      setImportMessage('Progress data copied to clipboard!');
      setTimeout(() => setImportMessage(''), 3000);
    }).catch(() => {
      setImportMessage('Export data displayed below - copy manually');
      setTimeout(() => setImportMessage(''), 3000);
    });
  };

  const handleImport = () => {
    // Client-side input validation before processing
    if (!importData || typeof importData !== 'string') {
      setImportMessage('Please paste your progress data first');
      return;
    }

    const trimmedData = importData.trim();
    
    // Basic client-side checks
    if (trimmedData.length === 0) {
      setImportMessage('Progress data cannot be empty');
      return;
    }

    if (trimmedData.length > 50000) {
      setImportMessage('Progress data is too large (maximum 50KB allowed)');
      return;
    }

    // Basic format check
    if (!trimmedData.startsWith('{') || !trimmedData.endsWith('}')) {
      setImportMessage('Progress data must be in JSON format (starting with { and ending with })');
      return;
    }

    // Attempt import with comprehensive validation
    const result = importProgress(trimmedData);
    setImportMessage(result.message);
    
    if (result.success) {
      setImportData('');
      setTimeout(() => setImportMessage(''), 3000);
    }
  };

  const handleClear = () => {
    clearProgress();
    setShowConfirmClear(false);
    setImportMessage('All progress has been cleared');
    setTimeout(() => setImportMessage(''), 3000);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 text-center">Manage Your Progress</h2>
      
      {/* Progress Summary */}
      <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-border mb-8">
        <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-4">Current Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-friendly-blue/5 dark:bg-friendly-blue/10 rounded-lg">
            <div className="text-2xl font-bold text-friendly-blue dark:text-blue-400">{score}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Total Points</div>
          </div>
          <div className="text-center p-4 bg-success-teal/5 dark:bg-success-teal/10 rounded-lg">
            <div className="text-2xl font-bold text-success-teal dark:text-teal-400">{completedTasks.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Tasks Completed</div>
          </div>
          <div className="text-center p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{badges.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Badges Earned</div>
          </div>
          <div className="text-center p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
              {storageInfo ? `${storageInfo.sizeInKB}` : '–'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">KB Stored</div>
          </div>
        </div>
      </div>

      {/* Progress Management Tools */}
      <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-border">
        <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-4">Backup & Restore</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your progress is automatically saved in your browser. Use these tools to backup, 
          transfer, or reset your progress data.
        </p>

        {/* Message Display */}
        {importMessage && (
          <div className={`p-3 rounded-lg mb-4 ${
            importMessage.includes('successfully') || importMessage.includes('copied') 
              ? 'bg-success-teal/10 dark:bg-success-teal/20 text-success-teal border border-success-teal/20 dark:border-success-teal/30' 
              : importMessage.includes('cleared')
              ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/30'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/30'
          }`}>
            {importMessage}
          </div>
        )}

        <div className="space-y-6">
          {/* Export Section */}
          <div>
            <h4 className="font-medium text-charcoal-gray dark:text-dark-text mb-2">Export Progress</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Create a backup of your progress data that you can save or transfer to another device.
            </p>
            <button
              onClick={handleExport}
              className="bg-friendly-blue text-white px-4 py-2 rounded-lg hover:bg-friendly-blue/90 transition-colors"
            >
              Export Progress Data
            </button>
            
            {showExport && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Progress Data (copy this text):
                </label>
                <textarea
                  value={exportProgress()}
                  readOnly
                  className="w-full h-32 p-3 border border-gray-300 dark:border-dark-border rounded-lg bg-gray-50 dark:bg-dark-bg text-sm font-mono text-charcoal-gray dark:text-dark-text"
                  onClick={(e) => e.target.select()}
                />
              </div>
            )}
          </div>

          {/* Import Section */}
          <div>
            <h4 className="font-medium text-charcoal-gray dark:text-dark-text mb-2">Import Progress</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Restore progress from a backup. This will replace your current progress.
            </p>
            <div className="space-y-3">
              <textarea
                value={importData}
                onChange={(e) => {
                  // Limit input length and sanitize on input
                  const input = e.target.value;
                  if (input.length <= 50000) {
                    setImportData(input);
                  }
                }}
                placeholder="Paste your exported progress data here..."
                className="w-full h-24 p-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg text-sm font-mono text-charcoal-gray dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500"
                maxLength={50000}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
              <button
                onClick={handleImport}
                className="bg-success-teal text-white px-4 py-2 rounded-lg hover:bg-success-teal/90 transition-colors"
              >
                Import Progress Data
              </button>
            </div>
          </div>

          {/* Clear Section */}
          <div>
            <h4 className="font-medium text-charcoal-gray dark:text-dark-text mb-2">Reset Progress</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Clear all progress data and start fresh. This action cannot be undone.
            </p>
            {!showConfirmClear ? (
              <button
                onClick={() => setShowConfirmClear(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All Progress
              </button>
            ) : (
              <div className="space-x-3">
                <button
                  onClick={handleClear}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Yes, Clear Everything
                </button>
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
