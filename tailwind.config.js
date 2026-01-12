/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: '#1E3D2F',
                navy: {
                    DEFAULT: '#0F1B2D',
                    800: '#16253B',
                    900: '#0A1220'
                },
                gold: '#D4AF37',
                cream: '#F9F9F7',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
