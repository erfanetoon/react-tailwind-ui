import type { ComponentProps } from "react";
import type { TButtonVariants, TColors, TSizes } from "../../types/global";

export interface IButtonThemeProps {
    variant?: TButtonVariants;
    size?: TSizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
        icon?: string;
    };
}

export interface IButtonBaseProps extends ComponentProps<"button"> {
    color?: TColors;
    fullWidth?: boolean;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
}

export interface IButtonProps extends IButtonBaseProps, IButtonThemeProps {}
