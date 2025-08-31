import { getAllTasksData, getTaskCategories } from '../../lib/tasks';
import TasksClient from './TasksClient';

export const metadata = {
  title: 'Privacy Tasks - The Privacy Guide',
  description: 'Discover actionable privacy tasks to protect your digital life. From quick wins to advanced techniques, build better privacy habits step by step.',
};

export default async function TasksPage() {
  try {
    const [tasks, categories] = await Promise.all([
      getAllTasksData(),
      getTaskCategories()
    ]);

    return <TasksClient tasks={tasks} categories={categories} />;
  } catch (error) {
    console.error('Error loading tasks page:', error);
    
    return (
      <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              Privacy Tasks
            </h1>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                No Tasks Available Yet
              </h2>
              <p className="text-yellow-700 dark:text-yellow-200">
                We're still setting up the privacy tasks. Check back soon for actionable 
                steps to improve your digital privacy!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
