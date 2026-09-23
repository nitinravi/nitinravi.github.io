/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Every colour resolves through a CSS custom property declared in
      // index.css, so the light/dark sets live in one place and the
      // `/60` opacity modifiers still work.
      colors: {
        ground: 'rgb(var(--ground) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Field labels and metadata: small, wide-tracked, never below 10px.
        field: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.12em' }],
      },
      keyframes: {
        'rule-draw': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'rule-draw': 'rule-draw 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
