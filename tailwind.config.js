/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Beige — couleur dominante de l'identité visuelle
        beige: {
          DEFAULT: '#E8DCC8',
          50: '#FBF9F5',
          100: '#F5EEE0',
          200: '#EFE4D2',
          300: '#E8DCC8',
          400: '#D9C7A7',
          500: '#C6AF87',
        },
        // Brun charbon — texte, titres, navbar : contraste fort
        charcoal: {
          DEFAULT: '#29251F',
          50: '#F4F2EF',
          400: '#4E463B',
          500: '#3A342B',
          600: '#29251F',
          700: '#1E1B16',
          800: '#141210',
        },
        // Brun moyen — éléments secondaires
        umber: {
          DEFAULT: '#8A6F52',
          300: '#A88F72',
          400: '#8A6F52',
          500: '#6F5840',
        },
        // Vert sauge — accent, à utiliser avec parcimonie
        sage: {
          DEFAULT: '#71806A',
          50: '#EEF1EC',
          100: '#DEE3D9',
          200: '#C1CBB9',
          300: '#9FAD94',
          400: '#71806A',
          500: '#5C6957',
          600: '#495344',
        },
        // Crème — sections claires, cartes
        cream: {
          DEFAULT: '#F7F2E8',
        },
        // Blanc cassé — zones respirantes
        linen: {
          DEFAULT: '#FFFDF8',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.85rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(41,37,31,0.04), 0 6px 20px -4px rgba(41,37,31,0.08)',
        'soft-lg': '0 12px 40px -8px rgba(41,37,31,0.14)',
        'soft-xl': '0 24px 64px -12px rgba(41,37,31,0.18)',
        card: '0 1px 0 rgba(41,37,31,0.04), 0 8px 24px -10px rgba(41,37,31,0.12)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marqueeX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marqueeX 28s linear infinite',
      },
    },
  },
  plugins: [],
};
