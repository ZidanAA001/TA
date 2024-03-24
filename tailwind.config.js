/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': '#55AA70',
        'accent': '#7BCC94',
        'secondary': '#9FD5B0',
        'black': '#0A0F0B',
        'white': '#F9FBFA',
        'gray': '#6B7280',
      }
    },
  },
  plugins: [],
}

