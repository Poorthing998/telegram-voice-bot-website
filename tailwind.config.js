/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#060B14',
          light: '#0A1122',
        },
        surface: {
          DEFAULT: '#0F1A2E',
          2: '#162240',
        },
        mint: {
          DEFAULT: '#00E5A0',
          dim: '#00C489',
          glow: 'rgba(0, 229, 160, 0.3)',
        },
        cyan: '#00D4FF',
        warm: '#FFB800',
        coral: '#FF6B6B',
        lavender: '#8B6DFF',
        'text-primary': '#F0F4FF',
        'text-muted': '#8B9DC3',
        'text-dim': '#4A5F8A',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      animation: {
        'float-1': 'float1 20s infinite ease-in-out',
        'float-2': 'float2 25s infinite ease-in-out',
        'float-3': 'float3 30s infinite ease-in-out',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'arc-spin': 'arcSpin 8s linear infinite',
        'arc-spin-reverse': 'arcSpinReverse 12s linear infinite',
        'wave': 'waveIntense 1.4s ease-in-out infinite',
        'chip-float': 'chipFloat 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-in-right': 'slideInRight 1.4s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(60px,-80px) scale(1.2)' },
        },
        float2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-40px,50px) scale(1.15)' },
        },
        float3: {
          '0%,100%': { transform: 'translate(0,0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(20px,-40px) scale(0.9) rotate(180deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        arcSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        arcSpinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        waveIntense: {
          '0%,100%': { height: '12%' },
          '25%': { height: '80%' },
          '50%': { height: '100%' },
          '75%': { height: '45%' },
        },
        chipFloat: {
          '0%,100%': { transform: 'translate(0,0) rotate(0deg)' },
          '25%': { transform: 'translate(8px,-12px) rotate(2deg)' },
          '50%': { transform: 'translate(-4px,-20px) rotate(-1deg)' },
          '75%': { transform: 'translate(12px,-8px) rotate(1.5deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-200%) skewX(-15deg)' },
          '50%,100%': { transform: 'translateX(400%) skewX(-15deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)', filter: 'blur(6px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(80px) scale(0.9)', filter: 'blur(12px)' },
          to: { opacity: '1', transform: 'translateX(0) scale(1)', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
};
