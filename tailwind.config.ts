import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MONO-X Primary Colors
        'mono-x-yellow': 'var(--mono-x-yellow)',
        'mono-x-orange': 'var(--mono-x-orange)',
        'mono-x-yellow-orange': 'var(--mono-x-yellow-orange)',
        'mono-x-black': 'var(--mono-x-black)',
        'mono-x-gray': 'var(--mono-x-gray)',
        'mono-x-deep-gray': 'var(--mono-x-deep-gray)',
        'mono-x-white': 'var(--mono-x-white)',
        'mono-x-success': 'var(--mono-x-success)',
        'mono-x-warning': 'var(--mono-x-warning)',
        'mono-x-error': 'var(--mono-x-error)',
        
        // shadcn/ui compatible colors using MONO-X palette
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)'
        }
      },
      fontFamily: {
        // MONO-X Typography System
        'mono-x-sans': [
          'Neue Haas Grotesk Pro',
          '游ゴシック',
          'Yu Gothic',
          'YuGothic',
          'Hiragino Sans',
          'ヒラギノ角ゴシック Pro',
          'Hiragino Kaku Gothic Pro',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'mono-x-serif': [
          'Times New Roman',
          'A1明朝',
          'Times',
          'serif'
        ],
        'mono-x-body': [
          '游ゴシック',
          'Yu Gothic',
          'YuGothic',
          'Hiragino Sans',
          'ヒラギノ角ゴシック Pro',
          'Hiragino Kaku Gothic Pro',
          'source-han-sans-japanese',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      fontSize: {
        // MONO-X Typography Scale
        'mono-x-xl': ['60px', '1.3'],      // 大見出し
        'mono-x-lg': ['30px', '1.3'],      // 中見出し  
        'mono-x-md': ['18px', '1.5'],      // 小見出し
        'mono-x-base': ['14px', '1.7'],    // 本文大
        'mono-x-sm': ['12px', '1.7'],      // 本文小
        'mono-x-xs': ['10px', '1.4'],      // 注釈
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  },
  plugins: [],
};

export default config; 