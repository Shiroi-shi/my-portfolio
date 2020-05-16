// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      width: {
        '20rem': '20rem',
      }
    }
  },
  variants: {
    backgroundColor: [`hover`, `dark`, `dark-hover`, `dark-group-hover`],
    borderColor: [`hover`, `dark`, `dark-focus`, `dark-focus-within`],
    textColor: [`hover`, `dark`, `dark-hover`, `dark-active`],
    visibility: [`responsive`],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require(`tailwindcss-dark-mode`)()
  ]
};
