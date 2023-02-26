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
            ripple: false,
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
    dropdown: {
        defaultProps: {
            offset: 4,
            placement: "bottomStart",
            size: "md",
            classNames: {},
        },
    },
    hint: {
        defaultProps: {
            className: "",
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
    passwordInput: {
        defaultProps: {
            size: "md",
            variant: "default",
            classNames: {},
        },
    },
    textarea: {
        defaultProps: {
            size: "md",
            variant: "default",
            classNames: {},
        },
    },
    tooltip: {
        defaultProps: {
            classNames: {},
            offset: 4,
            placement: "top",
        },
    },
};
