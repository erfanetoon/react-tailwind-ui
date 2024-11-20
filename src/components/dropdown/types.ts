import type { FC, MouseEventHandler, ReactNode } from "react";
import type {
    Colors,
    DropdownTriggers,
    DropdownPlacements,
    Sizes,
} from "../../types/global";

export interface DropdownThemeProps {
    size?: Sizes;
    placement?: DropdownPlacements;

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

export interface DropdownBaseProps {
    children: ReactNode;
    trigger?: DropdownTriggers;
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

export interface DropdownProps extends DropdownBaseProps, DropdownThemeProps {}
