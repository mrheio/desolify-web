/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#6366f1',
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
				},
				secondary: {
					DEFAULT: '#14b0b8',
					50: '#91eef3',
					100: '#7eebf1',
					200: '#59e6ed',
					300: '#35e0e9',
					400: '#18d3dd',
					500: '#14b0b8',
					600: '#0f8085',
					700: '#094f53',
					800: '#041f20',
					900: '#000000',
				},
				navbar: '#4338ca',
			},
			height: {
				navbar: '60px',
			},
			padding: {
				navbar: '60px',
			},
			margin: {
				navbar: '60px',
			},
			fontSize: {
				300: '0.8125rem',
				400: '0.875rem',
				500: '0.9375rem',
				600: '1rem',
				700: '1.875rem',
				800: '2.5rem',
				900: '3.5rem',
			},
			minHeight: {
				'main-content': 'calc(100vh - 60px)',
			},
		},
	},
	plugins: [],
};
