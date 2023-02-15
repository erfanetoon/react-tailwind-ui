import { ComponentProps } from "react";
import { Colors } from "../../types/global";

export interface HintThemeProps {
    className?: string;
}

export interface HintProps extends ComponentProps<"div"> {
    color?: Colors;
}
