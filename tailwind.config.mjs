/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'movie-overlay': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
};
