import { ComponentProps } from "react";
import { Colors, Sizes } from "../../types/global";

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

export interface InputProps extends ComponentProps<"input"> {
    color?: Colors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}
