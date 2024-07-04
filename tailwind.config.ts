import type { Config } from 'tailwindcss';

const px0_1200 = Array.from(Array(1201)).reduce((prev, _, i) => {
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
      borderWidth: px0_1200,
      fontSize: px0_1200,
      lineHeight: px0_1200,
      minWidth: px0_1200,
      minHeight: px0_1200,
      spacing: px0_1200,
      borderRadius: px0_1200,
    },
  },
  plugins: [],
};

export default config;
