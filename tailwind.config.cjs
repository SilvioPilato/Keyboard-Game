/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'press': 'press-down 0.15s ease-in-out both',
        'bounce': 'bounce 0.25s ease-in-out',
      },
      keyframes: {
        'press-down': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(0.15rem,0.3rem)' },
        },
        'bounce' :{
          '0%':{transform: 'translateY(0)'} , 
          '20%': {transform: 'translateY(1rem)'} ,
          '40%': {transform: 'translateY(-1rem)'},  
          '50%': {transform: 'translateY(1rem)'} ,
          '60%': {transform: 'translateY(-1rem)'},  
          '80%': {transform: 'translateY(1rem)'} , 
          '100%': {transform: 'translateY(0)'},
       } 
      }
    },
  },
  plugins: [],
}
