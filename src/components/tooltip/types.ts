import type { ReactNode } from "react";
import type { Placement } from "@floating-ui/react";

export interface ITooltipThemeProps {
    placement?: Placement;
    offset?: number;
    classNames?: {
        element?: string;
        tooltip?: string;
    };
}

export interface ITooltipBaseProps {
    content: ReactNode;
    children: ReactNode;
}

export interface ITooltipProps extends ITooltipBaseProps, ITooltipThemeProps {}
