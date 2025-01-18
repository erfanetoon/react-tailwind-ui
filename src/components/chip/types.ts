import type { ComponentProps, MouseEventHandler } from "react";
import type { TChipVariants, TColors, TSizes } from "~types/global";

export interface IChipThemeProps {
    variant?: TChipVariants;
    size?: TSizes;
    ripple?: boolean;
    classNames?: {
        element?: string;
        icon?: string;
        text?: string;
    };
}

export interface IChipBaseProps extends ComponentProps<"div"> {
    color?: TColors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    events?: {
        handleClickIcon?: MouseEventHandler<HTMLDivElement>;
    };
}

export interface IChipProps extends IChipBaseProps, IChipThemeProps {}
