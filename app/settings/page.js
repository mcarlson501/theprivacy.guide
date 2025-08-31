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
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Manage your privacy journey progress and customize your experience.
          </p>
        </div>

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
