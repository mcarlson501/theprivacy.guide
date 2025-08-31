'use client';

import { useProgress } from '../context/ProgressContext';

export default function LoadingWrapper({ children }) {
  const { isLoaded } = useProgress();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-friendly-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return children;
}
