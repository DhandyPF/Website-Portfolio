/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      colors: {
        bgPrimary: 'var(--color-bg-primary)',
        cardSurface: 'var(--color-card-surface)',
        surfaceRaised: 'var(--color-surface-raised)',
        logoSurface: 'var(--color-logo-surface)',
        textMain: 'var(--color-text-main)',
        textMuted: 'var(--color-text-muted)',
        textSubtle: 'var(--color-text-subtle)',
        accentHighlight: 'var(--color-accent-highlight)',
        accentHover: 'var(--color-accent-hover)',
        accentContrast: 'var(--color-accent-contrast)',
        borderSubtle: 'var(--color-border-subtle)',
        borderStrong: 'var(--color-border-strong)',
        inputSurface: 'var(--color-input-surface)',
      },
      fontFamily: {
        editorial: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        surface: 'var(--radius-surface)',
        control: 'var(--radius-control)',
      },
      transitionTimingFunction: {
        motion: 'var(--ease-motion)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
      boxShadow: {
        surface: 'var(--shadow-surface)',
        focus: 'var(--shadow-focus)',
      },
    },
  },
  plugins: [],
};
