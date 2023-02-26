import type { ComponentProps, ReactNode } from "react";
import { Placement } from "@floating-ui/react";

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