import type { FC, MouseEventHandler, ReactNode } from "react";
import type {
    TColors,
    TDropdownTriggers,
    TDropdownPlacements,
    TSizes,
} from "~types/global";

export interface IDropdownThemeProps {
    size?: TSizes;
    placement?: TDropdownPlacements;
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

export interface IDropdownBaseProps {
    children: ReactNode;
    trigger?: TDropdownTriggers;
    color?: TColors;
    dropdownRender?: ReactNode;
    items?: Array<{
        label?: ReactNode;
        icon?: ReactNode;
        color?: TColors;
        size?: TSizes;
        disabled?: boolean;
        active?: boolean;
        customRender?: FC;
        divider?: "before" | "after";
        onClick?: MouseEventHandler<HTMLLIElement>;
    }>;
}

export interface IDropdownProps
    extends IDropdownBaseProps,
        IDropdownThemeProps {}
