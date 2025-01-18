import { Config } from "tailwindcss";
import merge from "deepmerge";
import shadows from "~config/shadows";
import colors from "~config/colors";
import fontSizes from "~config/fontSizes";
import breakpoints from "~config/breakpoints";

const withTailwind = (tailwindConfig: Config) => {
    return merge(
        {
            darkMode: "class",
            content: [
                "./node_modules/@erfanetoon/react-tailwind-ui/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                boxShadow: shadows,
                colors: colors,
                fontSize: fontSizes,
                screens: breakpoints,
            },
        },
        { ...tailwindConfig },
    );
};

export default withTailwind;
