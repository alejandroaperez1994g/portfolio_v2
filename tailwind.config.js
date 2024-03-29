module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './views/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
            screens: {
                'xs': '380px',
                "3xl": "1807px",
            }
        },
    },
    plugins: [],
}
