import type { ComponentProps } from "react";
import type { TColors } from "~types/global";

export interface IHintThemeProps {
    className?: string;
}

export interface IHintBaseProps extends ComponentProps<"div"> {
    color?: TColors;
}

export interface IHintProps extends IHintBaseProps, IHintThemeProps {}
