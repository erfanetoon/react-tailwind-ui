import { ThemeContext } from "./types";

export const DefaultValue: ThemeContext = {
    global: {
        color: "primary",
        direction: "ltr",
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
    chip: {
        defaultProps: {
            variant: "filled",
            ripple: true,
            size: "md",
        },
    },
    codeInput: {
        defaultProps: {
            size: "md",
            variant: "default",
        },
    },
    iconButton: {
        defaultProps: {
            variant: "filled",
            ripple: true,
            size: "md",
        },
    },
    input: {
        defaultProps: {
            size: "md",
            variant: "default",
        },
    },
};
