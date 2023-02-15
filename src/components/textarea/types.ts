import type { ComponentProps } from "react";
import type { Colors, Sizes } from "../../types/global";

export interface TextareaThemeProps {
    variant?: "default" | "outlined";
    size?: Sizes;
    classNames?: {
        wrapper?: string;
        root?: string;
        label?: string;
        input?: string;
        error?: string;
        icon?: string;
    };
}

export interface TextareaProps extends ComponentProps<"textarea"> {
    color?: Colors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}
