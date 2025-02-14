import type { Config } from 'tailwindcss';
import { heroui } from "@heroui/react";
import tailwindAnimate from 'tailwindcss-animate';

const colors = {
  palleteBlack: '#000000',
  palleteGold: '#e7bb6a',
  goldDark: '#ccb25e',
  goldLight: '#f2dc82',
  palleteAccent: '#e5e7eb',
  palleteTitle: '#ffff',
  palleteAnexo: '#333333',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      fontSize: {
        'responsive-sm': 'clamp(0.75rem, 2vw, 0.875rem)',
        'responsive-base': 'clamp(0.875rem, 3vw, 1rem)',
        'responsive-lg': 'clamp(1rem, 4vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 5vw, 1.5rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'pallete-black': colors.palleteBlack,
        'pallete-gold': colors.palleteGold,
        'gold-dark': colors.goldDark,
        'gold-light': colors.goldLight,
        'pallete-accent': colors.palleteAccent,
        'pallete-title': colors.palleteTitle,
        'pallete-anexo': colors.palleteAnexo,
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        rotate180: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(180deg)',
          },
        },
        rotate0: {
          '0%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        rotate180: 'rotate180 0.5s ease-in-out forwards',
        rotate0: 'rotate0 0.5s ease-in-out forwards',
        fadeUp: 'fadeUp 0.5s ease-in-out forwards',
        fadeSlide: 'fadeSlide 1s ease-in-out forwards',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  darkMode: ['class'],
  plugins: [heroui(), tailwindAnimate],
};
export default config;
