/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: { 
      colors: {
        'bg-toggle':'#023F6D',
        'first-color':'#0664AB',
        'second-color':'#FFA135',
        'dark-blue':'#1f2937',
        'light-blue':'#8F99F3',
        '8FB3CE':'#8FB3CE',
        'FFF':'#FFF',
        '585858':'#585858',
        '96A0AD':'#96A0AD',
        '002D62':'#002D62',
        'EEE':'#EEE',
        '61B4F2':'#61B4F2',
        '676767':'#676767'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

