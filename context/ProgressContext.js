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
      const parsed = typeof progressData === 'string' ? JSON.parse(progressData) : progressData;
      
      // Validate the imported data
      if (parsed && 
          typeof parsed.score === 'number' &&
          Array.isArray(parsed.completedTasks) &&
          Array.isArray(parsed.badges)) {
        dispatch({ type: ACTIONS.LOAD_PROGRESS, payload: parsed });
        return { success: true, message: 'Progress imported successfully!' };
      } else {
        return { success: false, message: 'Invalid progress data format' };
      }
    } catch (error) {
      return { success: false, message: 'Failed to parse progress data' };
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
