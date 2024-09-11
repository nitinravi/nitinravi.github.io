/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    './index.html', 
    './src/**/*.{js,jsx}', // Ensure Tailwind processes your JS and JSX files
  ],
  theme: {
    extend: {
      // Custom colors for dark mode gradient
      colors: {
        darkBlue: '#0e153a',      // Custom dark blue for background gradient
        darkerBlue: '#1b2a49',    // Darker shade of blue for contrast
        textLight: '#E5E7EB', // Light text color for light mode
        textDark: '#D1D5DB', // Dark text color for dark mode
      },
      fontFamily: {
        // Add the custom font 'Poppins'
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
