/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['selector'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          900: '#0c4a6e',
          700: '#0369a1',
          600: '#0284c7',
          500: '#0ea5e9',
          300: '#7dd3fc',
          100: '#e0f2fe',
        },
        dark: {
          950: '#030712',
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
        },
        light: {
          500: '#6b7280',
          400: '#9ca3af',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb',
        },
        'accent-blue': '#1DA1F2',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-spaceGrotesk)'],
        vazirmatn: ['var(--font-vazirmatn)'],
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184,184,184,0.02),0px 2px 4px 0px rgba(184,184,184,0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
      backgroundImage: {
        'auth-dark': "url('/assets/images/auth-dark.png')",
        'auth-light': "url('/assets/images/auth-light.png')",
      },
      screens: {
        xs: '420px',
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
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
