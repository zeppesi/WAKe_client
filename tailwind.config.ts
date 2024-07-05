import type { Config } from 'tailwindcss';

export const px0_1200_arr = Array.from({ length: 1201 }, (_, i) =>
  i.toString(),
);
const px0_1200 = Object.fromEntries(px0_1200_arr.map(i => [i, `${i}px`]));

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',

  theme: {
    extend: {
      colors: {
        black: '#222222',
        primary: '#00E507',
      },
      borderWidth: px0_1200,
      fontSize: px0_1200,
      lineHeight: px0_1200,
      minWidth: px0_1200,
      minHeight: px0_1200,
      spacing: px0_1200,
      borderRadius: px0_1200,
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
