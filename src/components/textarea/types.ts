import type { ComponentProps } from "react";
import type { TColors, TInputVariants, TSizes } from "~types/global";

export interface ITextareaThemeProps {
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

export interface ITextareaBaseProps extends ComponentProps<"textarea"> {
    color?: TColors;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    label?: string;
    error?: string;
}

export interface ITextareaProps
    extends ITextareaBaseProps,
        ITextareaThemeProps {}
