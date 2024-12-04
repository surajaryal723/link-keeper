/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-600": '#3c096c',
                "primary-500": '#5a189a',
                "primary-400": '#7b2cbf',
                'primary-200': '#e0c3fc'

            }
        },
    },
    plugins: [],
}