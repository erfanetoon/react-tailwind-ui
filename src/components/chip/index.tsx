import React from "react";
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";
import deepmerge from "deepmerge";
import { useTheme } from "../../context";
import ChipSizes from "../../styles/chip/sizes";
import ChipVariants from "../../styles/chip/variants";
import type { ChipProps } from "./types";

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            variant,
            size,
            color,
            ripple,
            loading,
            loadingIcon,
            icon,
            iconPosition = "start",
            className,
            classNames,
            events,
            children,
            ...restProps
        },
        ref,
    ) => {
        const { global, chip: themeProps } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? themeProps?.defaultProps?.variant;
        size = size ?? themeProps?.defaultProps?.size;
        ripple = ripple ?? themeProps?.defaultProps?.ripple;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const rippleEffect = ripple !== undefined && new Ripple();

        const variantStyles = ChipVariants[variant][color];

        const sizeStyles = ChipSizes[size];

        return (
            <div
                {...restProps}
                ref={ref}
                className={twMerge(
                    [
                        "inline-block inline-flex items-center justify-center border font-medium align-middle",
                        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                        global?.borderRadius || "",
                        global?.transition || "",
                        sizeStyles,
                        Object.values(variantStyles)
                            .map((item) => item)
                            .join(" "),
                        global?.shadow?.base,
                        global?.shadow?.hover,
                        themeProps?.styles?.base || "",
                        themeProps?.styles?.sizes[size] || "",
                        themeProps?.styles?.variants[variant] || "",
                        themeProps?.styles?.colors[color] || "",
                    ].join(" "),
                    className,
                    classNames?.element,
                )}
                onMouseDown={(e) => {
                    const onMouseDown = restProps?.onMouseDown;

                    if (ripple) {
                        rippleEffect.create(
                            e,
                            variant === "filled" ||
                                variant === "gradient" ||
                                variant === "outlined_filled"
                                ? "light"
                                : "dark",
                        );
                    }

                    return typeof onMouseDown === "function" && onMouseDown(e);
                }}
            >
                {!!icon && iconPosition === "start" ? (
                    loading ? (
                        <div
                            className={twMerge(
                                "me-2 animate-spin transition-all duration-300",
                                classNames?.icon,
                            )}
                        >
                            {!!loadingIcon && loadingIcon}
                        </div>
                    ) : (
                        <div
                            className={twMerge(
                                "me-2 cursor-pointer",
                                classNames?.icon,
                            )}
                            onClick={events?.handleClickIcon}
                        >
                            {icon}
                        </div>
                    )
                ) : (
                    ""
                )}

                <span className={twMerge("", classNames?.text)}>
                    {children}
                </span>

                {!!icon && iconPosition === "end" ? (
                    loading ? (
                        <div
                            className={twMerge(
                                "ms-2 animate-spin transition-all duration-300",
                                classNames?.icon,
                            )}
                        >
                            {!!loadingIcon && loadingIcon}
                        </div>
                    ) : (
                        <div
                            className={twMerge(
                                "ms-2  cursor-pointer",
                                classNames?.icon,
                            )}
                            onClick={events?.handleClickIcon}
                        >
                            {icon}
                        </div>
                    )
                ) : (
                    ""
                )}
            </div>
        );
    },
);

export default Chip;
