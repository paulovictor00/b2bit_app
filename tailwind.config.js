/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
b2blue: '#022744',
b2yellow: '#FDCF00',
},
boxShadow: {
card: '0 20px 40px rgba(0,0,0,.08)'
},
borderRadius: {
'2xl': '1rem',
}
},
},
plugins: [],
}