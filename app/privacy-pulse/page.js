import { getAllNewsData, getNewsCategories } from '../../lib/news';
import PrivacyPulseClient from './PrivacyPulseClient';

export const metadata = {
  title: 'Privacy Pulse - The Privacy Guide',
  description: 'Stay informed about the latest privacy news, data breaches, security updates, and consumer alerts. Actionable insights for your digital safety.',
};

export default async function PrivacyPulsePage() {
  try {
    const [newsArticles, categories] = await Promise.all([
      getAllNewsData(),
      getNewsCategories()
    ]);

    return <PrivacyPulseClient articles={newsArticles} categories={categories} />;
  } catch (error) {
    console.error('Error loading privacy pulse page:', error);
    
    return (
      <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              Privacy Pulse
            </h1>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                No Articles Available Yet
              </h2>
              <p className="text-yellow-700 dark:text-yellow-200">
                We're working on bringing you the latest privacy news and insights. 
                Check back soon for updates on data breaches, security tools, and consumer alerts!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
