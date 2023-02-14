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
            classNames: {},
        },
    },
    chip: {
        defaultProps: {
            variant: "filled",
            ripple: true,
            size: "md",
            classNames: {},
        },
    },
    codeInput: {
        defaultProps: {
            size: "md",
            variant: "default",
            classNames: {},
        },
    },
    iconButton: {
        defaultProps: {
            variant: "filled",
            ripple: true,
            size: "md",
            classNames: {},
        },
    },
    input: {
        defaultProps: {
            size: "md",
            variant: "default",
            classNames: {},
        },
    },
};
