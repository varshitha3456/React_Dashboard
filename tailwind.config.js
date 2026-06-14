/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0ea5e9',
          purple: '#a855f7',
          green: '#22c55e',
          violet: '#8b5cf6',
          cyan: '#0891b2',
        },
        status: {
          healthy: { bg: '#f0fdf4', text: '#15803d' },
          atrisk: { bg: '#fefce8', text: '#a16207' },
          attention: { bg: '#fff7ed', text: '#c2410c' },
          low: { bg: '#f0fdf4', text: '#15803d' },
          medium: { bg: '#fefce8', text: '#a16207' },
          high: { bg: '#fef2f2', text: '#b91c1c' },
        },
        surface: {
          card: '#ffffff',
          page: '#f9fafb',
          border: '#e5e7eb',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
        }
      },
      spacing: {
        'card-pad': '1.25rem',
      },
      borderRadius: {
        card: '0.75rem',
      },
      fontSize: {
        'kpi-value': ['1.5rem', { fontWeight: '700' }],
        'kpi-label': ['0.75rem', { fontWeight: '500', letterSpacing: '0.025em' }],
      },
    },
  },
  plugins: [],
}