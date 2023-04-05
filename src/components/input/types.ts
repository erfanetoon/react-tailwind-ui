import type { ComponentProps } from "react";
import type { Colors, Sizes } from "../../types/global";

export interface InputThemeProps {
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

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
    color?: Colors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}
