/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'max-sm': {'max': '767px'},
        'short': { 'raw': '(max-height: 639px)' },
      },
      fontSize: {
        clamp_greating: "clamp(1.3rem, 2vw + 1px, 5rem)",
        clamp_name: "clamp(1.3rem, 3vw + 1px, 5rem)",
        clamp_profession: "clamp(1.3rem, 2vw + 1px, 5rem)",
        clamp_description: "clamp(1rem, 1.5vw + 1px, 1.5rem)",
        clamp_project_description: "clamp(0.8rem, 1vw + 1px, 1.5rem)",
      },
      // for dynamic gradient background
      keyframes: {
        gradientChange: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-change': 'gradientChange 15s ease infinite',
      },
    },
    
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
}
