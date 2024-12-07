import type { ComponentProps } from "react";
import type { ButtonVariants, Colors, Sizes } from "../../types/global";

export interface ButtonThemeProps {
    variant?: ButtonVariants;
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
        icon?: string;
    };
}

export interface ButtonBaseProps extends ComponentProps<"button"> {
    color?: Colors;
    fullWidth?: boolean;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
}

export interface ButtonProps extends ButtonBaseProps, ButtonThemeProps {}
