import type { FC, MouseEventHandler, ReactNode } from "react";
import type { Placement } from "@floating-ui/react";
import type { Colors, Sizes } from "../../types/global";

export interface DropdownThemeProps {
    size?: Sizes;
    placement?:
        | "topStart"
        | "topEnd"
        | "bottomStart"
        | "bottomEnd"
        | "startBottom"
        | "startTop"
        | "endBottom"
        | "endTop";
    offset?: number;
    classNames?: {
        wrapper?: string;
        target?: string;
        dropdown?: string;
        item?: string;
        icon?: string;
        divider?: string;
    };
}

export interface DropdownProps {
    children: ReactNode;
    trigger?: "click" | "hover";
    color?: Colors;
    dropdownRender?: ReactNode;
    items?: Array<{
        label?: ReactNode;
        icon?: ReactNode;
        color?: Colors;
        size?: Sizes;
        disabled?: boolean;
        active?: boolean;
        customRender?: FC;
        divider?: "before" | "after";
        onClick?: MouseEventHandler<HTMLLIElement>;
    }>;
}
