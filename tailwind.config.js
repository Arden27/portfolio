/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': 'rgb(156, 163, 175)',
        // 'primary': 'rgb(107, 114, 128)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'max-sm': {'max': '767px'},
        'short': { 'raw': '(max-height: 639px)' },
        'very-short': { 'raw': '(max-height: 500px)' },
      },
      fontSize: {
        clamp_greating: "clamp(1.3rem, 2vw + 1px, 5rem)",
        clamp_name: "clamp(1.3rem, 3vw + 1px, 5rem)",
        clamp_profession: "clamp(1.3rem, 2vw + 1px, 5rem)",
        clamp_description: "clamp(1rem, 1.5vw + 1px, 1.5rem)",
        clamp_sm_section_name: "clamp(0.5rem, 5.5vh + 1px, 1.5rem)",
        clamp_sm_skills_category_name: "clamp(0.5rem, 4vh + 1px, 1.5rem)",
        clamp_project_description: "clamp(0.8rem, 1.1vw + 1px, 1.5rem)",
        clamp_sm_project_description: "clamp(0.5rem, 3.3vh + 1px, 1.5rem)",
      },
      // for dynamic gradient background
      keyframes: {
        gradientChange: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        slideUpThenLeft: {
          '0%': { transform: 'translateY(-20px) translateX(0)' },
          '100%': { transform: 'translateY(-20px) translateX(-100%)' },
        },
        slideRightThenDown: {
          '0%': { transform: 'translateY(-20px) translateX(-100%)' },
          '80%': { transform: 'translateY(-20px) translateX(0)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        slideUpThenRight: {
          '0%': { transform: 'translateY(-20px) translateX(0)' },
          '100%': { transform: 'translateY(-20px) translateX(100%)' },
        },
        slideLeftThenDown: {
          '0%': { transform: 'translateY(-20px) translateX(100%)' },
          '80%': { transform: 'translateY(-20px) translateX(0)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        }
      },
      animation: {
        'gradient-change': 'gradientChange 15s ease infinite',
        'slideUpThenLeft': 'slideUpThenLeft 1s ease-in-out 1 forwards',
        'slideRightThenDown': 'slideRightThenDown 0.8s ease-in-out 1 forwards',
        'slideUpThenRight': 'slideUpThenRight 1s ease-in-out 1 forwards',
        'slideLeftThenDown': 'slideLeftThenDown 0.8s ease-in-out 1 forwards',
      },
    },
    
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
}
