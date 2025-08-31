// Privacy level system - dynamic and scalable
export const getPrivacyLevel = (completionPercentage) => {
  const levels = [
    { min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600' },
    { min: 20, max: 39, title: 'Data Detective', emoji: '🕵️', color: 'text-blue-600' },
    { min: 40, max: 69, title: 'Digital Guardian', emoji: '🛡️', color: 'text-green-600' },
    { min: 70, max: 89, title: 'Privacy Advocate', emoji: '⚔️', color: 'text-purple-600' },
    { min: 90, max: 100, title: 'Privacy Master', emoji: '👑', color: 'text-yellow-600' }
  ];

  return levels.find(level => 
    completionPercentage >= level.min && completionPercentage <= level.max
  ) || levels[0];
};

export const getNextLevel = (completionPercentage) => {
  const levels = [
    { min: 0, max: 19, title: 'Privacy Intern', threshold: 0 },
    { min: 20, max: 39, title: 'Data Detective', threshold: 20 },
    { min: 40, max: 69, title: 'Digital Guardian', threshold: 40 },
    { min: 70, max: 89, title: 'Privacy Advocate', threshold: 70 },
    { min: 90, max: 100, title: 'Privacy Master', threshold: 90 }
  ];

  const currentIndex = levels.findIndex(level => 
    completionPercentage >= level.min && completionPercentage <= level.max
  );

  if (currentIndex === -1 || currentIndex === levels.length - 1) {
    return null; // Already at max level
  }

  return {
    title: levels[currentIndex + 1].title,
    threshold: levels[currentIndex + 1].threshold,
    pointsNeeded: levels[currentIndex + 1].threshold - completionPercentage
  };
};
