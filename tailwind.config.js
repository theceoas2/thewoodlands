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
                coffee: '#2C1810', // Dark wood/coffee
                sand: '#E6E1D6',   // Warm beige/sand
                stone: '#8B8077',
                charcoal: '#2D2D2D',
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
