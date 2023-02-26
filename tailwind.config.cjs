/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'press': 'press-down 0.15s ease-in-out both',
        'bounce': 'bounce 0.30s',
      },
      keyframes: {
        'press-down': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(0.15rem,0.3rem)' },
        },
        'bounce' :{
          '0%':{transform: 'translateY(0)'} , 
          '30%': {transform: 'translateY(0.8rem)'},  
          '50%': {transform: 'translateY(-1rem)'} ,
          '70%': {transform: 'translateY(0.8rem)'},  
          '100%': {transform: 'translateY(0)'},
       } 
      }
    },
  },
  plugins: [],
}
