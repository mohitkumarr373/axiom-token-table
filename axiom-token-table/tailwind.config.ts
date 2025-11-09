import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
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
export default config;
