/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
          background: '#0d1f2d',
          surface: '#132a3a',
          surfaceHighlight: '#1a3548',
          accent: '#D2C1B6',
          accentHover: '#e0d0c5',
          cream: '#FFFFFF',
          muted: '#5a7d96',
          bodyText: '#e8ddd6',
          border: '#1e3a4f',
        },
        animation: {
          blink: 'blink 1s step-end infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          },
        },
      },
    },
  };
  
  export default config;