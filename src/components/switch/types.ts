import type { ComponentProps } from "react";
import type { TColors, TSizes } from "~types/global";

export interface ISwitchThemeProps {
    size?: TSizes;
    classNames?: {
        root?: string;
        wrapper?: string;
        container?: string;
        label?: string;
        input?: string;
        circle?: string;
        circleBorder?: string;
        error?: string;
    };
}

export interface ISwitchBaseProps
    extends Omit<ComponentProps<"input">, "size"> {
    color?: TColors;
    label?: string;
    error?: string;
}

export interface ISwitchProps extends ISwitchBaseProps, ISwitchThemeProps {}
