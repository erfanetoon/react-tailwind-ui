import { ComponentProps } from "react";
import { Colors, Sizes } from "../../types/global";

export interface IconButtonThemeProps {
    variant?: "text" | "filled" | "outlined" | "outlined_filled" | "gradient";
    size?: Sizes;
    ripple?: boolean;
}

export interface IconButtonProps extends ComponentProps<"button"> {
    color?: Colors;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    classNames?: {
        button?: string;
        loading?: string;
        icon?: string;
    };
}
