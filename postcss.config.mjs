const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  // darkMode: 'class',
};
export default config;