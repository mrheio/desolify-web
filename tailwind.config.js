/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5529F5',
                    50: '#E0D8FD',
                    100: '#D1C5FC',
                    200: '#B29EFA',
                    300: '#9377F9',
                    400: '#7450F7',
                    500: '#5529F5',
                    600: '#370ADC',
                    700: '#2A08A6',
                    800: '#1C0570',
                    900: '#0F033B',
                },
                'on-primary': '#fff',
                foreground: '#f7f5ff',
                'on-foreground': '#000',
                error: {
                    DEFAULT: '#FF1F39',
                    50: '#FFD7DB',
                    100: '#FFC2C9',
                    200: '#FF99A5',
                    300: '#FF7181',
                    400: '#FF485D',
                    500: '#FF1F39',
                    600: '#E6001B',
                    700: '#AE0014',
                    800: '#76000E',
                    900: '#3E0007',
                },
            },
            height: {
                navbar: '60px',
            },
            padding: {
                navbar: '60px',
            },
        },
    },
    plugins: [],
};
