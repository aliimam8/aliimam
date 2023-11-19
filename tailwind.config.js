const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', 
            './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: ["class"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      aired: "#f50537",
      black: "#000000",
      white: "#ffffff",
      slate: {
        100: '#f1f5f9',
        200: '#e2e8f0',
        400: '#94a3b8',
        600: '#475569',
        800: '#1e293b',
        900: '#0f172a',
      },
      
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
