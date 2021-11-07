module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'forest-green': '#138A36',
        'green-pigment': '#16A240',
        'rich-black': '#00171F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
