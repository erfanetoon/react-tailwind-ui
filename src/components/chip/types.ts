import type { ComponentProps, MouseEventHandler } from "react";
import type { ChipVariants, Colors, Sizes } from "../../types/global";

export interface ChipThemeProps {
    variant?: ChipVariants;
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        element?: string;
        icon?: string;
        text?: string;
    };
}

export interface ChipBaseProps extends ComponentProps<"div"> {
    color?: Colors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    events?: {
        handleClickIcon?: MouseEventHandler<HTMLDivElement>;
    };
}

export interface ChipProps extends ChipBaseProps, ChipThemeProps {}
