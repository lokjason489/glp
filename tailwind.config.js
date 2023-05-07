// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)', 
        'secondary': 'var(--color-secondary)',
        'third': 'var(--color-third)',
        'button-inactive': '#acacac',
        'background-popup': '#e9e9e9',
        'primary-hover': 'var(--color-primary-hover)',
      },
      fontFamily: {
        'primary': 'var(--font-primary)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': 'var(--round-primary)',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 4px -1px rgb(0 0 0 / 0.1)',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
