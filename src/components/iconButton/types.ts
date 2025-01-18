import type { ComponentProps } from "react";
import type { TButtonVariants, TColors, TSizes } from "~types/global";

export interface IIconButtonThemeProps {
    variant?: TButtonVariants;
    size?: TSizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
    };
}

export interface IIconButtonBaseProps extends ComponentProps<"button"> {
    color?: TColors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
}

export interface IIconButtonProps
    extends IIconButtonBaseProps,
        IIconButtonThemeProps {}
