import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import { HintProps, HintThemeProps } from "./types";
import HintColors from "../../styles/hint/color";

type Props = HintProps & HintThemeProps;

export const Hint = React.forwardRef<HTMLDivElement, Props>(
    ({ className, color, children, ...restProps }, ref) => {
        const { global, hint: themeProps } = useTheme();

        color = color ?? global?.color;
        className = className ?? themeProps?.defaultProps?.className;

        const colorStyles = HintColors[color];

        return (
            <div
                {...restProps}
                ref={ref}
                className={twMerge(
                    [
                        "p-4 rtl:border-r-2 ltr:border-l-2",
                        global?.transition || "",
                        themeProps?.styles?.base || "",
                    ].join(" "),
                    Object.values(colorStyles)
                        .map((item) => item)
                        .join(" "),
                    themeProps?.styles?.colors[color] || "",
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

export default Hint;
