/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy: '#0d3b4e',
        crimson: '#D43828',
        flame: '#F27800',
        amber: '#FCB819',
        cream: '#F4E2B7',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cspt: {
          "primary": "#0d3b4e",
          "secondary": "#D43828",
          "accent": "#F27800",
          "neutral": "#F4E2B7",
          "base-100": "#fdf8f0",
          "info": "#FCB819",
          "success": "#0d3b4e",
          "warning": "#F27800",
          "error": "#D43828",
        },
      },
    ],
  },
}
