/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#CDD0D8",
      },
      backgroundImage: {
        "custom-gradient-box":
          "linear-gradient(to bottom right, #0097FE 0%, #0097FE 87%)",
      },
    },
  },
  plugins: [],
};
