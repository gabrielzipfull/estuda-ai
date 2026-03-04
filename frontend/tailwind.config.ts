import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaria: '#4F46E5',
        secundaria: '#06B6D4',
        fundo: '#09090B'
      }
    }
  },
  plugins: []
};

export default config;
