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

export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}
