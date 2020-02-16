// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {},
  variants: {
    backgroundColor: [`hover`, `dark`, `dark-hover`, `dark-group-hover`],
    borderColor: [`hover`, `dark`, `dark-focus`, `dark-focus-within`],
    textColor: [`hover`, `dark`, `dark-hover`, `dark-active`],
    visibility: [`responsive`],
  },
  plugins: [
    require(`tailwindcss-dark-mode`)()
  ]
};
