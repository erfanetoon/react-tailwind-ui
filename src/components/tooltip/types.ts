import type { ReactNode } from "react";
import type { Placement } from "@floating-ui/react";

export interface TooltipThemeProps {
    placement?: Placement;
    offset?: number;
    classNames?: {
        element?: string;
        tooltip?: string;
    };
}

export interface TooltipBaseProps {
    content: ReactNode;
    children: ReactNode;
}

export interface TooltipProps extends TooltipBaseProps, TooltipThemeProps {}
