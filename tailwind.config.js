/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'black': '#000000',
				'graphite': '#111011',
				'white': '#EEEEEE',
				'accent': '#EB2733',
				'border':'#201E20',
				'gray': '#A9A9A9'
			},
			fontFamily: {
				'pixel': ['"Pixelify Sans"', 'sans-serif']
			},
		},
	},
	plugins: [],
}

