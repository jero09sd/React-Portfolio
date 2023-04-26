const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                untouched: ['Untouched', ...defaultTheme.fontFamily.sans],
                Roman: ['Times New Roman', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)'
                ],
                'blue': [
                    '0 35px 35px rgba(5, 10, 48, 0.25)',
                    '0 45px 65px rgba(5, 10, 48, 0.15)'
                ]
              }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
