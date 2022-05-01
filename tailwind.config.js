module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        active: '#f4f9ff',
        primary: '#5841d8',
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
    screens: {
      sm: '650px',
      md: '960px',
      lg: '1280px',
      xl: '1400px',
      '2xl': '1920px',
      // --nextui-breakpoints-xs: 650px;
      // --nextui-breakpoints-sm: 960px;
      // --nextui-breakpoints-md: 1280px;
      // --nextui-breakpoints-lg: 1400px;
      // --nextui-breakpoints-xl: 1920px;
    },
  },
  plugins: [],
};
