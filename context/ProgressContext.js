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

  // Helper validation functions to reduce complexity
  const validateProgressInput = (progressData) => {
    if (!progressData || typeof progressData !== 'string') {
      return { valid: false, message: 'Invalid input: Progress data must be a string' };
    }
    if (progressData.length > 50000) {
      return { valid: false, message: 'Invalid input: Progress data too large (max 50KB)' };
    }
    return { valid: true };
  };

  const validateJsonStructure = (sanitizedData) => {
    const nestingLevel = (sanitizedData.match(/\{|\[/g) || []).length;
    if (nestingLevel > 20) {
      return { valid: false, message: 'Invalid input: Data structure too complex' };
    }
    
    try {
      const parsed = JSON.parse(sanitizedData);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return { valid: false, message: 'Invalid data: Root must be an object' };
      }
      return { valid: true, data: parsed };
    } catch (parseError) {
      return { valid: false, message: 'Invalid JSON format' };
    }
  };

  const validateProgressStructure = (parsed) => {
    if (!Number.isInteger(parsed.score) || parsed.score < 0 || parsed.score > 1000000) {
      return { valid: false, message: 'Invalid score: Must be integer between 0-1,000,000' };
    }
    if (!Array.isArray(parsed.completedTasks)) {
      return { valid: false, message: 'Invalid completedTasks: Must be an array' };
    }
    if (!Array.isArray(parsed.badges)) {
      return { valid: false, message: 'Invalid badges: Must be an array' };
    }
    if (parsed.completedTasks.length > 1000) {
      return { valid: false, message: 'Invalid data: Too many completed tasks (max 1000)' };
    }
    if (parsed.badges.length > 500) {
      return { valid: false, message: 'Invalid data: Too many badges (max 500)' };
    }
    return { valid: true };
  };

  const validateTaskIds = (taskIds) => {
    for (const taskId of taskIds) {
      if (typeof taskId !== 'string' || taskId.length === 0 || taskId.length > 100) {
        return { valid: false, message: 'Invalid task ID: Must be non-empty string under 100 chars' };
      }
      if (!/^[a-zA-Z0-9_-]+$/.test(taskId)) {
        return { valid: false, message: 'Invalid task ID format: Only letters, numbers, hyphens, underscores allowed' };
      }
    }
    
    const uniqueTaskIds = new Set(taskIds);
    if (uniqueTaskIds.size !== taskIds.length) {
      return { valid: false, message: 'Invalid data: Duplicate task IDs found' };
    }
    return { valid: true };
  };

  const validateBadges = (badges) => {
    for (const badge of badges) {
      if (!badge || typeof badge !== 'object' || Array.isArray(badge)) {
        return { valid: false, message: 'Invalid badge: Must be an object' };
      }
      if (typeof badge.id !== 'string' || badge.id.length === 0 || badge.id.length > 100) {
        return { valid: false, message: 'Invalid badge ID: Must be non-empty string under 100 chars' };
      }
      if (typeof badge.name !== 'string' || badge.name.length === 0 || badge.name.length > 200) {
        return { valid: false, message: 'Invalid badge name: Must be non-empty string under 200 chars' };
      }
      if (!/^[a-zA-Z0-9_-]+$/.test(badge.id)) {
        return { valid: false, message: 'Invalid badge ID format: Only letters, numbers, hyphens, underscores allowed' };
      }
      if (!/^[a-zA-Z0-9\s_-]+$/.test(badge.name)) {
        return { valid: false, message: 'Invalid badge name format: Only letters, numbers, spaces, hyphens, underscores allowed' };
      }
    }
    
    const uniqueBadgeIds = new Set(badges.map(b => b.id));
    if (uniqueBadgeIds.size !== badges.length) {
      return { valid: false, message: 'Invalid data: Duplicate badge IDs found' };
    }
    return { valid: true };
  };

  const validateAllowedProperties = (parsed) => {
    const allowedProperties = ['score', 'completedTasks', 'badges'];
    const unexpectedProperties = Object.keys(parsed).filter(prop => !allowedProperties.includes(prop));
    
    if (unexpectedProperties.length > 0) {
      return { valid: false, message: `Invalid data: Unexpected properties: ${unexpectedProperties.join(', ')}` };
    }
    return { valid: true };
  };

  const importProgress = (progressData) => {
    try {
      // Step 1: Input validation
      const inputValidation = validateProgressInput(progressData);
      if (!inputValidation.valid) return { success: false, message: inputValidation.message };

      // Step 2: JSON parsing and structure validation
      const sanitizedData = progressData.trim();
      const jsonValidation = validateJsonStructure(sanitizedData);
      if (!jsonValidation.valid) return { success: false, message: jsonValidation.message };

      const parsed = jsonValidation.data;

      // Step 3: Progress structure validation
      const structureValidation = validateProgressStructure(parsed);
      if (!structureValidation.valid) return { success: false, message: structureValidation.message };

      // Step 4: Task IDs validation
      const taskValidation = validateTaskIds(parsed.completedTasks);
      if (!taskValidation.valid) return { success: false, message: taskValidation.message };

      // Step 5: Badges validation
      const badgeValidation = validateBadges(parsed.badges);
      if (!badgeValidation.valid) return { success: false, message: badgeValidation.message };

      // Step 6: Properties validation
      const propertiesValidation = validateAllowedProperties(parsed);
      if (!propertiesValidation.valid) return { success: false, message: propertiesValidation.message };

      // Step 7: Create sanitized object and dispatch
      const sanitizedProgress = {
        score: parsed.score,
        completedTasks: parsed.completedTasks,
        badges: parsed.badges
      };

      dispatch({ type: ACTIONS.LOAD_PROGRESS, payload: sanitizedProgress });
      return { success: true, message: 'Progress imported successfully!' };

    } catch (error) {
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
