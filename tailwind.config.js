import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21d760',
        primaryContent: '#000000',
        primaryLight: '#48e37e',
        primaryDark: '1aab4c',
        secondary: '#213dd7',
        secondaryContent: '#f9fafe',
        secondaryLight: '#4860e3',
        bgLight: '#262626',
        bgDark: '#1a1a1a',
        bgDarkest: '#09090b',
        textWhite: '#fbfbfb',
        textGray: '#d9d9d9',
        textGrayDark: '#a6a6a6',
      }
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};