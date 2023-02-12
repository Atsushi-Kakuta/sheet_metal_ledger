/** @type {import('tailwindcss').Config} */
module.exports = {
    variants: {
        table: ['responsive', 'hover'],
    },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [],
}
