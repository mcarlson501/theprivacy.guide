/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'friendly-blue': '#4A90E2',
        'success-teal': '#50E3C2',
        'charcoal-gray': '#333333',
        'calm-off-white': '#F8F9FA',
        // Dark mode colors
        'dark-bg': '#0F1419',
        'dark-surface': '#1C2128',
        'dark-border': '#30363D',
        'dark-text': '#E6EDF3',
        'dark-text-secondary': '#8B949E',
      },
    },
  },
  plugins: [],
}
