module.exports = {
  theme: {
    extend: {
      colors: {
        'my-primary': '#2e2e2e',
        'my-secondary': '#7f7f7f',
        'my-orange': '#f0cf61',
        'my-gray': '#c4c4c4',
        'my-gray-dark': '#757575',
        'my-button-gray': '#212121',
        'my-button-red': '#ff0000',
      },
      fontFamily: {
        'my-primary': ['Roboto Slab', 'serif'],
        'my-secondary': ['Russo One', 'sans-serif'],
        'my-logo': ['Audiowide', 'cursive'],
      },
      spacing: {
        'width-bg': '60%',
        '500px': '500px',
        '673px': '673px',
        '56-25%': '56.25%',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
};
