'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  score: 0,
  completedTasks: [],
  badges: [],
};

// Action types
const ACTIONS = {
  COMPLETE_TASK: 'COMPLETE_TASK',
  AWARD_BADGE: 'AWARD_BADGE',
  LOAD_PROGRESS: 'LOAD_PROGRESS',
  RESET_PROGRESS: 'RESET_PROGRESS',
};

// Reducer function
function progressReducer(state, action) {
  switch (action.type) {
    case ACTIONS.COMPLETE_TASK:
      const { taskId, points, badgeId, badgeName } = action.payload;
      
      // Check if task is already completed
      if (state.completedTasks.includes(taskId)) {
        return state;
      }

      const newState = {
        ...state,
        score: state.score + points,
        completedTasks: [...state.completedTasks, taskId],
      };

      // Award badge if provided
      if (badgeId && !state.badges.some(badge => badge.id === badgeId)) {
        newState.badges = [...state.badges, { id: badgeId, name: badgeName }];
      }

      return newState;

    case ACTIONS.AWARD_BADGE:
      const { id, name } = action.payload;
      if (state.badges.some(badge => badge.id === id)) {
        return state;
      }
      return {
        ...state,
        badges: [...state.badges, { id, name }],
      };

    case ACTIONS.LOAD_PROGRESS:
      return action.payload;

    case ACTIONS.RESET_PROGRESS:
      return initialState;

    default:
      return state;
  }
}

// Create context
const ProgressContext = createContext();

// Custom hook to use progress context
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// Progress provider component
export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Load progress from localStorage on component mount
  useEffect(() => {
    const loadProgress = () => {
      try {
        // Check if we're running in the browser (not SSR)
        if (typeof window !== 'undefined') {
          const savedProgress = localStorage.getItem('privacy-guide-progress');
          if (savedProgress) {
            const parsedProgress = JSON.parse(savedProgress);
            
            // Validate the saved data structure
            if (parsedProgress && 
                typeof parsedProgress.score === 'number' &&
                Array.isArray(parsedProgress.completedTasks) &&
                Array.isArray(parsedProgress.badges)) {
              dispatch({ type: ACTIONS.LOAD_PROGRESS, payload: parsedProgress });
            } else {
              console.warn('Invalid saved progress data structure, starting fresh');
            }
          }
        }
      } catch (error) {
        console.error('Failed to load saved progress:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadProgress();
  }, []);

  // Save progress to localStorage whenever state changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem('privacy-guide-progress', JSON.stringify(state));
        }
      } catch (error) {
        console.error('Failed to save progress to localStorage:', error);
      }
    }
  }, [state, isLoaded]);

  // Action creators
  const completeTask = (taskId, points, badgeId = null, badgeName = null) => {
    dispatch({
      type: ACTIONS.COMPLETE_TASK,
      payload: { taskId, points, badgeId, badgeName },
    });
  };

  const awardBadge = (id, name) => {
    dispatch({
      type: ACTIONS.AWARD_BADGE,
      payload: { id, name },
    });
  };

  const resetProgress = () => {
    dispatch({ type: ACTIONS.RESET_PROGRESS });
  };

  const exportProgress = () => {
    return JSON.stringify(state, null, 2);
  };

  const importProgress = (progressData) => {
    try {
      // Input sanitization and length limits
      if (!progressData || typeof progressData !== 'string') {
        return { success: false, message: 'Invalid input: Progress data must be a string' };
      }

      // Prevent extremely large payloads (max 50KB)
      if (progressData.length > 50000) {
        return { success: false, message: 'Invalid input: Progress data too large (max 50KB)' };
      }

      // Remove any potential whitespace/control characters
      const sanitizedData = progressData.trim();
      
      // Basic JSON bomb protection - check for excessive nesting/complexity
      const nestingLevel = (sanitizedData.match(/\{|\[/g) || []).length;
      if (nestingLevel > 20) {
        return { success: false, message: 'Invalid input: Data structure too complex' };
      }

      // Parse with error handling
      let parsed;
      try {
        parsed = JSON.parse(sanitizedData);
      } catch (parseError) {
        return { success: false, message: 'Invalid JSON format' };
      }

      // Strict type and structure validation
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return { success: false, message: 'Invalid data: Root must be an object' };
      }

      // Validate required fields with strict type checking
      if (!Number.isInteger(parsed.score) || parsed.score < 0 || parsed.score > 1000000) {
        return { success: false, message: 'Invalid score: Must be integer between 0-1,000,000' };
      }

      if (!Array.isArray(parsed.completedTasks)) {
        return { success: false, message: 'Invalid completedTasks: Must be an array' };
      }

      if (!Array.isArray(parsed.badges)) {
        return { success: false, message: 'Invalid badges: Must be an array' };
      }

      // Validate array lengths to prevent memory exhaustion
      if (parsed.completedTasks.length > 1000) {
        return { success: false, message: 'Invalid data: Too many completed tasks (max 1000)' };
      }

      if (parsed.badges.length > 500) {
        return { success: false, message: 'Invalid data: Too many badges (max 500)' };
      }

      // Validate completedTasks array contents
      for (const taskId of parsed.completedTasks) {
        if (typeof taskId !== 'string' || taskId.length === 0 || taskId.length > 100) {
          return { success: false, message: 'Invalid task ID: Must be non-empty string under 100 chars' };
        }
        
        // Only allow alphanumeric, hyphens, and underscores (typical task ID format)
        if (!/^[a-zA-Z0-9_-]+$/.test(taskId)) {
          return { success: false, message: 'Invalid task ID format: Only letters, numbers, hyphens, underscores allowed' };
        }
      }

      // Validate badges array contents
      for (const badge of parsed.badges) {
        if (!badge || typeof badge !== 'object' || Array.isArray(badge)) {
          return { success: false, message: 'Invalid badge: Must be an object' };
        }

        if (typeof badge.id !== 'string' || badge.id.length === 0 || badge.id.length > 100) {
          return { success: false, message: 'Invalid badge ID: Must be non-empty string under 100 chars' };
        }

        if (typeof badge.name !== 'string' || badge.name.length === 0 || badge.name.length > 200) {
          return { success: false, message: 'Invalid badge name: Must be non-empty string under 200 chars' };
        }

        // Sanitize badge ID and name
        if (!/^[a-zA-Z0-9_-]+$/.test(badge.id)) {
          return { success: false, message: 'Invalid badge ID format: Only letters, numbers, hyphens, underscores allowed' };
        }

        // Badge name can have more characters but still needs basic sanitization
        if (!/^[a-zA-Z0-9\s_-]+$/.test(badge.name)) {
          return { success: false, message: 'Invalid badge name format: Only letters, numbers, spaces, hyphens, underscores allowed' };
        }
      }

      // Check for duplicate task IDs
      const uniqueTaskIds = new Set(parsed.completedTasks);
      if (uniqueTaskIds.size !== parsed.completedTasks.length) {
        return { success: false, message: 'Invalid data: Duplicate task IDs found' };
      }

      // Check for duplicate badge IDs
      const uniqueBadgeIds = new Set(parsed.badges.map(b => b.id));
      if (uniqueBadgeIds.size !== parsed.badges.length) {
        return { success: false, message: 'Invalid data: Duplicate badge IDs found' };
      }

      // Reject any unexpected properties (security measure)
      const allowedProperties = ['score', 'completedTasks', 'badges'];
      const actualProperties = Object.keys(parsed);
      const unexpectedProperties = actualProperties.filter(prop => !allowedProperties.includes(prop));
      
      if (unexpectedProperties.length > 0) {
        return { success: false, message: `Invalid data: Unexpected properties: ${unexpectedProperties.join(', ')}` };
      }

      // Create sanitized object with only allowed properties
      const sanitizedProgress = {
        score: parsed.score,
        completedTasks: parsed.completedTasks,
        badges: parsed.badges
      };

      dispatch({ type: ACTIONS.LOAD_PROGRESS, payload: sanitizedProgress });
      return { success: true, message: 'Progress imported successfully!' };

    } catch (error) {
      // Log error for debugging but don't expose internals to user
      console.error('Import progress error:', error);
      return { success: false, message: 'Failed to import progress data' };
    }
  };

  const clearProgress = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('privacy-guide-progress');
    }
    resetProgress();
  };

  const isTaskCompleted = (taskId) => {
    return state.completedTasks.includes(taskId);
  };

  const getBadgeById = (badgeId) => {
    return state.badges.find(badge => badge.id === badgeId);
  };

  const value = {
    ...state,
    isLoaded,
    completeTask,
    awardBadge,
    resetProgress,
    exportProgress,
    importProgress,
    clearProgress,
    isTaskCompleted,
    getBadgeById,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
