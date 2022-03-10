module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        active: '#f4f9ff',
        card: '#ffffff',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#5841d8',
        ghost: '#bbbbbb',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: '#5841d8',
        ghost: '#bbbbbb',
      }),
    },
  },
  plugins: [],
};
