/** @type {import('tailwindcss').Config} */
config = {
    variants: {
        table: ['responsive', 'hover'],
    },
    content: [
        './src/**/*.{html,js,svelte,ts}',
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}
module.exports = config;
