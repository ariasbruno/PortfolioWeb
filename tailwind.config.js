/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          yellow: '#F59E0B',
          'blue-light': '#60A5FA',
          'blue-dark': '#2563EB',
          'yellow-light': '#FBBF24',
          'yellow-dark': '#D97706',
        },
        accent: {
          orange: '#FF6B35',
          purple: '#8B5CF6',
          green: '#10B981',
          pink: '#EC4899',
        },
        neutral: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#6B7280',
          'gray-light': '#F3F4F6',
          'gray-dark': '#374151',
          cream: '#FDF6E3',
          'cream-light': '#FEFBF3',
        }
      },
      fontFamily: {
        'friendly': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Roboto Slab', 'monospace'],
      },
      boxShadow: {
        'hand-drawn': '4px 4px 0px #ffd803',
        'hand-drawn-hover': '6px 6px 0px #ffd803',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-yellow': '0 0 20px rgba(245, 158, 11, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern-dots': 'radial-gradient(circle, #000000 1px, transparent 1px)',
        'pattern-grid': 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
        'grid': '20px 20px',
      }
    },
  },
  plugins: [],
};
