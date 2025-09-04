import ProgressManager from '../../components/ProgressManager';

export const metadata = {
  title: 'Settings - The Privacy Guide',
  description: 'Manage your privacy progress data, export backups, and customize your experience.',
};

export default function SettingsPage() {
  return (
    <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-6">
            Settings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Manage your privacy journey progress and customize your experience.
          </p>
        </div>

        {/* Information Section */}
        <section className="mb-12">
          <div className="bg-friendly-blue/5 dark:bg-friendly-blue/10 border border-friendly-blue/20 dark:border-friendly-blue/30 rounded-xl p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-friendly-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-3">
                  About Your Privacy Progress Data
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Your data stays private:</strong> All your progress (completed tasks, points, badges) is stored only in your browser. 
                    We never send this information to our servers or anyone else.
                  </p>
                  <p>
                    <strong>These tools are optional:</strong> You don't need to use any of these features. Your progress will automatically save as you complete tasks. 
                    These tools are here if you want extra control over your data.
                  </p>
                  <p>
                    <strong>What each feature does:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Export:</strong> Creates a text backup you can save to a file or copy to another device</li>
                    <li><strong>Import:</strong> Restores progress from a backup (useful when switching browsers or devices)</li>
                    <li><strong>Reset:</strong> Clears everything if you want to start over</li>
                  </ul>
                  <p className="text-sm bg-white dark:bg-dark-surface p-3 rounded-lg border border-gray-200 dark:border-dark-border">
                    💡 <strong>Most people don't need to touch these settings.</strong> Just complete tasks and your progress saves automatically!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Management Section */}
        <ProgressManager />

        {/* Future Settings Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 text-center">Preferences</h2>
          <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-border">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Additional settings and preferences will be added here in future updates.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
