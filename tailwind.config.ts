import type { Config } from 'tailwindcss';

const px0_200 = Array.from(Array(201)).reduce((prev, _, i) => {
  prev[i] = `${i}px`;
  return prev;
}, {});

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        primary: '#00E507',
      },

      borderWidth: px0_200,
      fontSize: px0_200,
      lineHeight: px0_200,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};

export default config;
