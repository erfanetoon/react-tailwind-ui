import { ThemeContext } from "./types";

export const DefaultValue: ThemeContext = {
    global: {
        color: "blue",
        transition: "transition-all duration-300",
        borderRadius: "rounded",
    },
    button: {
        defaultProps: {
            variant: "filled",
            ripple: true,
            size: "md",
        },
    },
};
