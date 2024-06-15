/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			flexBasis: {
				left: '20%',
				center: '63%',
				right: '17%',
			},
		},
	},
	plugins: [require('daisyui')],
};
