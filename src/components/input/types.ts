import type { ComponentProps } from "react";
import type { TColors, TInputVariants, TSizes } from "~types/global";

export interface IInputThemeProps {
    variant?: TInputVariants;
    size?: TSizes;
    classNames?: {
        wrapper?: string;
        root?: string;
        label?: string;
        input?: string;
        error?: string;
        icon?: string;
    };
}

export interface IInputBaseProps extends Omit<ComponentProps<"input">, "size"> {
    color?: TColors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}

export interface IInputProps extends IInputBaseProps, IInputThemeProps {}
