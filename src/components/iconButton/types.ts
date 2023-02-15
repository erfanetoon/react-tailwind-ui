import type { ComponentProps } from "react";
import type { Colors, Sizes } from "../../types/global";

export interface IconButtonThemeProps {
    variant?: "text" | "filled" | "outlined" | "outlined_filled" | "gradient";
    size?: Sizes;
    ripple?: boolean;
    classNames?: {
        button?: string;
        loading?: string;
    };
}

export interface IconButtonProps extends ComponentProps<"button"> {
    color?: Colors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
}
