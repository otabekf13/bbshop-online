/** @type {import('tailwindcss').Config} */

const withImages = require('next-images')


module.exports = withImages({
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // presets: [
    // require('./tailwindcss.json')
    // ],

    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            dark: '#090F24',
            pink: '#ED9BC1',
            blue: {
                dark: '#3F4867',
                DEFAULT: '#74CCD8',
                light: '#D6F4FA',
            },
            gray: {
                DEFAULT: '#B7B8C5',
                light: '#F4F5F9',
                lightest: '#E4E7EE',
            },
            textColor: '#686877',
            green: '#69CB87',
            yellow: '#FFD882',
            red: '#FF5341',
            brown: '#D9C8BB',
        },
        screens: {
            // => @media (min-width: ***px and max-width: ***px) { ... }
            xs: {'min': '300px', 'max': '319px'},
            sm: {'min': '320px', 'max': '479px'},
            md: {'min': '480px', 'max': '1279px'},
            xl: {'min': '1280px', 'max': '1920px'},
            "4k": {'min': '1920px', 'max': '2560px'},

        },
        containers: {
            xs: {'max': "300px"},
            sm: {'max': "430px"},
            md: {'max': "1120px"},
            xl: {'max': "1850px"},
            "4k": {'max': "1850px"},
        },
        boxShadow: {
            popShadow: '0 6px 26px 0px rgba(105, 121, 150, 5)',
            shadow: '0 4px 11px 0px rgba(68, 97, 132, 8)',
            blueShadow: '0 2px 4px 0px rgba(51, 196, 223, 20)',
            pinkShadow: '0 2px 4px 0px rgba(237, 155, 193, 20)',
            smallShadow: '0 2px 4px 0px rgba(43, 90, 99, 6)',
            yellowShadow: '0 2px 4px 0px rgba(255, 206, 82, 20)',
            greenShadow: '0 2px 4px 0px rgba(31, 171, 87, 20)',
        },

        extend: {
            fontFamily: {
                'rubik': "'Rubik', 'sans-serif'",
                'noto': "'Noto Sans', 'sans-serif'",
                'pacifico': "'Pacifico', 'cursive'",
            },

        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    webpack(config, options) {
        return config
    }
})
