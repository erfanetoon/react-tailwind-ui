import type { ComponentProps } from "react";
import type { ButtonVariants, Colors, Sizes } from "../../types/global";

export interface IconButtonThemeProps {
    variant?: ButtonVariants;
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
    };
}

export interface IconButtonBaseProps extends ComponentProps<"button"> {
    color?: Colors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
}

export interface IconButtonProps
    extends IconButtonBaseProps,
        IconButtonThemeProps {}
