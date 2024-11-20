import type { ComponentProps } from "react";
import type { Colors } from "../../types/global";

export interface HintThemeProps {
    className?: string;
}

export interface HintBaseProps extends ComponentProps<"div"> {
    color?: Colors;
}

export interface HintProps extends HintBaseProps, HintThemeProps {}
