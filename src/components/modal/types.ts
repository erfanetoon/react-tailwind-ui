import type { ComponentProps } from "react";
import type { TModalSizes } from "~types/global";

export interface IModalThemeProps {
    size?: TModalSizes;
    classNames?: {
        root?: string;
        wrapper?: string;
        backdrop?: string;
        modal?: string;
    };
}

export interface IModalBaseProps extends ComponentProps<"div"> {
    isOpen: boolean;
    onClose: () => void;
    shouldCloseOnOverlayClick?: boolean;
}

export interface IModalProps extends IModalBaseProps, IModalThemeProps {}
