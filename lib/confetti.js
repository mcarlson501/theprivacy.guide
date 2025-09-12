import { useCallback } from 'react';

export const useConfetti = () => {
  const triggerConfetti = useCallback(async (buttonElement = null) => {
    try {
      // Check if we're in browser
      if (typeof window === 'undefined') {
        return;
      }
      
      // Dynamic import to avoid SSR issues
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default;
      
      // Calculate position
      let origin = { x: 0.5, y: 0.6 };
      if (buttonElement) {
        const rect = buttonElement.getBoundingClientRect();
        origin = {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        };
      }
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: origin,
        colors: ['#4A90E2', '#50E3C2', '#FFD700', '#FF6B6B', '#4ECDC4'],
        startVelocity: 30,
        gravity: 0.8,
        ticks: 200
      });
    } catch (error) {
      console.error('Error triggering confetti:', error);
    }
  }, []);

  const triggerSuccess = useCallback(async (buttonElement = null) => {
    try {
      const confetti = (await import('canvas-confetti')).default;
      
      // Calculate button position if provided
      let origin = { x: 0.5, y: 0.7 }; // Default center position
      
      if (buttonElement) {
        const rect = buttonElement.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        origin = { x, y };
      }
      
      // Gentle success celebration from button
      confetti({
        particleCount: 50,
        spread: 45,
        origin: origin,
        colors: ['#50E3C2', '#4A90E2'],
        startVelocity: 20,
        gravity: 0.9,
        shapes: ['circle'],
        ticks: 100
      });
    } catch (error) {
      console.error('Error triggering success confetti:', error);
    }
  }, []);

  return { triggerConfetti, triggerSuccess };
};
