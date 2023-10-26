/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        Grey: '#3E3F4E',
        DarkGrey: '#2B2C37',
        MediumGrey: '#828FA3',
        LightGrey: '#E4EBFA',
        VeryLightGrey: '#828fa30d',
        LighterGrey: '#F4F7FD',
        White: '#FFFFFF',
        Red: '#EA5555',
        LightRed: '#FF9898',
        Purple: '#635FC7',
        PurpleLight: '#A8A4FF',
        PurpleLighter: '#625fc73c',
        Black: '#000112',
        VeryDarkGrey: '#20212C',
      },
    },
  },
  plugins: [],
};
