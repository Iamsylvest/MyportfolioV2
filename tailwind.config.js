/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // <--- must be 'class'
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                customWhite: '#F8F8F8',
                customGray: '#EDEDED',
                customNavDark: '#3E3E42',
                customBodyDark: '#121212',
            },
            fontFamily: {
                roboto: ['"Roboto Flex"', 'sans-serif'], // <- correct format
            },
            textShadow: {
                sm: '1px 1px 2px rgba(0,0,0,0.25)',
                DEFAULT: '2px 2px 4px rgba(0,0,0,0.3)',
                lg: '40px 10px 6px rgba(0,0,0,0.20)',
                lg1: '-40px 10px 6px rgba(0,0,0,0.20)',
                // new ones for dark mode
                dark: '2px 2px 6px rgba(255,255,255,0.25)',
                darkLg: '40px 10px 6px rgba(255,255,255,0.2)',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(200px)' }, // 👈 start at +200px
                    '100%': { transform: 'translateX(-50%)' }, // move left continuously
                },
                fadeIn: {
                    '0%': { opacity: 0, transform: 'translate(0.9)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
                fadeIn: 'fadeIn 0.3s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-textshadow')],
};
