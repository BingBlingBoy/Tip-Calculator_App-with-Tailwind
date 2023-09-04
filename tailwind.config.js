/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                SpaceMomo: ["'Space Momo'", 'monospace']
            }
        },
        colors: {
            'dark-cyan': 'hsl(183, 100%, 15%)',
            'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
            'grayish-cyan': 'hsl(184, 14%, 56%)',
            'light-grayish-cyan':'hsl(185, 41%, 84%)',
            'v-light-grayish-cyan':'hsl(189, 41%, 97%)',
            'strong-cyan':'hsl(172, 67%, 45%)',
            'white':'hsl(0, 0%, 100%)',
            'red':'hsl(355, 60%, 56%)',
            'cyan':'hsl(181, 45%, 81%);'
        }
    },
    plugins: [],
}

