// Privacy level system - dynamic and scalable
const LEVELS = [
  { min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600', threshold: 0 },
  { min: 20, max: 39, title: 'Data Detective', emoji: '🕵️', color: 'text-blue-600', threshold: 20 },
  { min: 40, max: 69, title: 'Digital Guardian', emoji: '🛡️', color: 'text-green-600', threshold: 40 },
  { min: 70, max: 89, title: 'Privacy Advocate', emoji: '⚔️', color: 'text-purple-600', threshold: 70 },
  { min: 90, max: 100, title: 'Privacy Master', emoji: '👑', color: 'text-yellow-600', threshold: 90 }
];

export const getPrivacyLevel = (completionPercentage) => {
  return LEVELS.find(level => 
    completionPercentage >= level.min && completionPercentage <= level.max
  ) || LEVELS[0];
};

export const getNextLevel = (completionPercentage) => {
  const currentIndex = LEVELS.findIndex(level => 
    completionPercentage >= level.min && completionPercentage <= level.max
  );

  if (currentIndex === -1 || currentIndex === LEVELS.length - 1) {
    return null;
  }

  return {
    title: LEVELS[currentIndex + 1].title,
    threshold: LEVELS[currentIndex + 1].threshold,
    pointsNeeded: LEVELS[currentIndex + 1].threshold - completionPercentage
  };
};
