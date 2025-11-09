export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        positive: '#34CF7A',
        negative: '#FB5E5E',
        bg: {
          light: '#fff',
          alt: '#F7F8FA',
        },
        border: '#EAECEF',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      borderRadius: { lg: '8px' },
    },
  },
  plugins: [],
};
