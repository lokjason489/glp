// tailwind.config.js
const GLP_colors = {
  theme: {
    extend: {
      colors: {
        'primary': '#b29966',
        'secondary': '#2b6d71',
        'third': '#707070',
      },
    },
  },
}

const TKL_colors = {
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#5d656c',
        'third': '#707070',
      },
    },
  },
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  GLP: GLP_colors,
  TKL: TKL_colors,
  theme: {
    extend: {
      colors: {
        'primary': '#b29966',
        'secondary': '#2b6d71',
        'third': '#707070',
        'button-inactive': '#acacac',
        'background-popup': '#e9e9e9',
        'primary-hover':'#c1ae84',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus','group-hover'],
    },
  },
  plugins: [],
}