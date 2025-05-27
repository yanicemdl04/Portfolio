/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#64FFDA',
          50: '#E6FFF9',
          100: '#D1FFF6',
          200: '#A3FFED',
          300: '#75FFE4',
          400: '#64FFDA',
          500: '#36FFCD',
          600: '#08FFC1',
          700: '#00D9A3',
          800: '#00A67F',
          900: '#00735A',
        },
        background: {
          DEFAULT: '#0A192F',
          50: '#1C3D73',
          100: '#173363',
          200: '#122953',
          300: '#0D1F43',
          400: '#0A192F',
          500: '#07132A',
          600: '#040C24',
          700: '#01061F',
          800: '#000019',
          900: '#000014',
        },
        text: {
          light: '#CCD6F6',
          medium: '#8892B0',
          dark: '#495670',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};