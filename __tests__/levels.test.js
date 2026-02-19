import { getPrivacyLevel, getNextLevel } from '../lib/levels';

describe('Privacy Levels System', () => {
  describe('getPrivacyLevel', () => {
    it('returns Privacy Intern for 0-19% completion', () => {
      expect(getPrivacyLevel(0)).toMatchObject({
        min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600'
      });
      
      expect(getPrivacyLevel(10)).toMatchObject({
        min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600'
      });
      
      expect(getPrivacyLevel(19)).toMatchObject({
        min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600'
      });
    });

    it('returns Data Detective for 20-39% completion', () => {
      expect(getPrivacyLevel(20)).toMatchObject({
        min: 20, max: 39, title: 'Data Detective', emoji: '🕵️', color: 'text-blue-600'
      });
      
      expect(getPrivacyLevel(30)).toMatchObject({
        min: 20, max: 39, title: 'Data Detective', emoji: '🕵️', color: 'text-blue-600'
      });
      
      expect(getPrivacyLevel(39)).toMatchObject({
        min: 20, max: 39, title: 'Data Detective', emoji: '🕵️', color: 'text-blue-600'
      });
    });

    it('returns Digital Guardian for 40-69% completion', () => {
      expect(getPrivacyLevel(40)).toMatchObject({
        min: 40, max: 69, title: 'Digital Guardian', emoji: '🛡️', color: 'text-green-600'
      });
      
      expect(getPrivacyLevel(50)).toMatchObject({
        min: 40, max: 69, title: 'Digital Guardian', emoji: '🛡️', color: 'text-green-600'
      });
      
      expect(getPrivacyLevel(69)).toMatchObject({
        min: 40, max: 69, title: 'Digital Guardian', emoji: '🛡️', color: 'text-green-600'
      });
    });

    it('returns Privacy Advocate for 70-89% completion', () => {
      expect(getPrivacyLevel(70)).toMatchObject({
        min: 70, max: 89, title: 'Privacy Advocate', emoji: '⚔️', color: 'text-purple-600'
      });
      
      expect(getPrivacyLevel(80)).toMatchObject({
        min: 70, max: 89, title: 'Privacy Advocate', emoji: '⚔️', color: 'text-purple-600'
      });
      
      expect(getPrivacyLevel(89)).toMatchObject({
        min: 70, max: 89, title: 'Privacy Advocate', emoji: '⚔️', color: 'text-purple-600'
      });
    });

    it('returns Privacy Master for 90-100% completion', () => {
      expect(getPrivacyLevel(90)).toMatchObject({
        min: 90, max: 100, title: 'Privacy Master', emoji: '👑', color: 'text-yellow-600'
      });
      
      expect(getPrivacyLevel(95)).toMatchObject({
        min: 90, max: 100, title: 'Privacy Master', emoji: '👑', color: 'text-yellow-600'
      });
      
      expect(getPrivacyLevel(100)).toMatchObject({
        min: 90, max: 100, title: 'Privacy Master', emoji: '👑', color: 'text-yellow-600'
      });
    });

    it('handles edge cases and invalid inputs', () => {
      // Negative numbers should default to first level
      expect(getPrivacyLevel(-10)).toMatchObject({
        min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600'
      });
      
      // Over 100% should still return Privacy Master
      expect(getPrivacyLevel(150)).toMatchObject({
        min: 0, max: 19, title: 'Privacy Intern', emoji: '🔍', color: 'text-gray-600'
      });
    });
  });

  describe('getNextLevel', () => {
    it('returns next level for Privacy Intern (0-19%)', () => {
      const result = getNextLevel(10);
      expect(result).toEqual({
        title: 'Data Detective',
        threshold: 20,
        pointsNeeded: 10
      });
    });

    it('returns next level for Data Detective (20-39%)', () => {
      const result = getNextLevel(25);
      expect(result).toEqual({
        title: 'Digital Guardian',
        threshold: 40,
        pointsNeeded: 15
      });
    });

    it('returns next level for Digital Guardian (40-69%)', () => {
      const result = getNextLevel(55);
      expect(result).toEqual({
        title: 'Privacy Advocate',
        threshold: 70,
        pointsNeeded: 15
      });
    });

    it('returns next level for Privacy Advocate (70-89%)', () => {
      const result = getNextLevel(80);
      expect(result).toEqual({
        title: 'Privacy Master',
        threshold: 90,
        pointsNeeded: 10
      });
    });

    it('returns null for Privacy Master (90-100%) - already at max', () => {
      expect(getNextLevel(90)).toBeNull();
      expect(getNextLevel(95)).toBeNull();
      expect(getNextLevel(100)).toBeNull();
    });

    it('handles edge cases properly', () => {
      // Boundary values
      expect(getNextLevel(19)).toEqual({
        title: 'Data Detective',
        threshold: 20,
        pointsNeeded: 1
      });
      
      expect(getNextLevel(20)).toEqual({
        title: 'Digital Guardian',
        threshold: 40,
        pointsNeeded: 20
      });
      
      // Invalid completion percentages should return null
      expect(getNextLevel(-10)).toBeNull();
      expect(getNextLevel(150)).toBeNull();
    });

    it('calculates points needed correctly', () => {
      expect(getNextLevel(0).pointsNeeded).toBe(20);
      expect(getNextLevel(15).pointsNeeded).toBe(5);
      expect(getNextLevel(38).pointsNeeded).toBe(2);
      expect(getNextLevel(65).pointsNeeded).toBe(5);
      expect(getNextLevel(85).pointsNeeded).toBe(5);
    });
  });
});