module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
			},
			fontFamily: {
				poppins: ['"Poppins"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('@tailwindcss/line-clamp'),
	],
}
