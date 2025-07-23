/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light theme primary colors (replacing the navy)
        brand: {
          purple: "#7D53FF", // Primary brand purple
          purpleLight: "#9069FF", // Lighter purple for hover
          orange: "#FB8B24", // Secondary orange accent
          orangeLight: "#FFA150", // Lighter orange for hover
        },
        // Background colors (light theme)
        light: {
          50: "#FFFFFF", // Pure white background
          100: "#F7F7F7", // Off-white sections
          200: "#F0F0F0", // Light gray cards
          300: "#E0E0E0", // Borders
        },
        // Text colors (light theme)
        text: {
          primary: "#212121", // Dark text
          secondary: "#757575", // Medium gray text
          muted: "#9E9E9E", // Light gray text
        },
        // Additional accent colors
        accent: {
          teal: "#24FBDA", // Complementary teal
          blue: "#60A5FA", // Light blue accent
          green: "#10B981", // Success green
          red: "#EF4444", // Error red
        },
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      animation: {
         expandFromTopRight: 'expandFromTopRight 0.75s ease-out forwards',
      },
      keyframes: {
         expandFromTopRight: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      backgroundSize: {
        300: "300% 300%",
      },
      boxShadow: {
        glow: "0 0 30px rgba(125, 83, 255, 0.15)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
