/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    screens: {
      // Mobile-first : Les styles par défaut s'appliquent aux écrans jusqu'à 480px.
      // Pour les écrans supérieurs, on utilise des préfixes.

      // Tablette : de 481px à 1024px
      md: { min: "481px", max: "1024px" },

      // Bureau (Desktop) : à partir de 1025px
      lg: { min: "1025px" },
    },
    extend: {},
  },
  plugins: [],
};
