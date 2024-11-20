const merge = require("deepmerge");
const breakpoints = require("./config/breakpoints");
const colors = require("./config/colors");
const fontSizes = require("./config/fontSizes");
const shadows = require("./config/shadows");

/**
 * Merge react-tailwind-ui and tailwindcss configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withTailwind(tailwindConfig) {
    return merge(
        {
            darkMode: "class",
            content: [
                "./node_modules/@erfanetoon/react-tailwind-ui/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                boxShadow: shadows.default,
                colors: colors.default,
                fontSize: fontSizes.default,
                screens: breakpoints.default,
            },
        },
        { ...tailwindConfig },
    );
}

module.exports = withTailwind;
