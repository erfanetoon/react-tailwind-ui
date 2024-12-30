import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import HintColors from "../../styles/hint/color";
import type { IHintProps } from "./types";

export const Hint = React.forwardRef<HTMLDivElement, IHintProps>(
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
                        Object.values(colorStyles)
                            .map((item) => item)
                            .join(" "),
                        themeProps?.styles?.base || "",
                        themeProps?.styles?.colors[color] || "",
                    ].join(" "),
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

export default Hint;
