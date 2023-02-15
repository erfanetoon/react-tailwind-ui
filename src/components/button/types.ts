import type { ComponentProps } from "react";
import type { Colors, Sizes } from "../../types/global";

export interface ButtonThemeProps {
    variant?: "text" | "filled" | "outlined" | "outlined_filled" | "gradient";
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
        icon?: string;
    };
}

export interface ButtonProps extends ComponentProps<"button"> {
    color?: Colors;
    fullWidth?: boolean;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
}
