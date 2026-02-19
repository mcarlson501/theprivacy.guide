export function getCategoryColor(category) {
  const colors = {
    'Quick Win': 'bg-success-teal/10 dark:bg-success-teal/20 text-success-teal border-success-teal/20 dark:border-success-teal/30',
    'Essential': 'bg-friendly-blue/10 dark:bg-friendly-blue/20 text-friendly-blue border-friendly-blue/20 dark:border-friendly-blue/30',
    'Advanced': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/30',
    'Expert': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700/30',
  };
  return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600';
}
