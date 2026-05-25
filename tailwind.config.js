/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Add your custom branding colors here
        primary: "#1fb6ff",
        secondary: "#7e5bef",
        accent: "#000",
      },
      fontFamily: {
        // Add custom Google fonts or local fonts
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        // Custom spacing values
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    // Common plugins (need to be installed via npm)
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
