import { ComponentProps, MouseEventHandler } from "react";
import { Colors, Sizes } from "../../types/global";

export interface ChipThemeProps {
    variant?: "text" | "filled" | "outlined" | "outlined_filled" | "gradient";
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        element?: string;
        icon?: string;
        text?: string;
    };
}

export interface ChipProps extends ComponentProps<"div"> {
    color?: Colors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    events?: {
        handleClickIcon?: MouseEventHandler<HTMLDivElement>;
    };
}
