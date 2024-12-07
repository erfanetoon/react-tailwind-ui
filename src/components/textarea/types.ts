import type { ComponentProps } from "react";
import type { Colors, InputVariants, Sizes } from "../../types/global";

export interface TextareaThemeProps {
    variant?: InputVariants;
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

export interface TextareaBaseProps extends ComponentProps<"textarea"> {
    color?: Colors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}

export interface TextareaProps extends TextareaBaseProps, TextareaThemeProps {}
