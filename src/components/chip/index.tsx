import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import ChipSizes from "../../styles/chip/sizes";
import ChipVariants from "../../styles/chip/variants";
import { ChipProps, ChipThemeProps } from "./types";
import Ripple from "material-ripple-effects";

type Props = ChipProps & ChipThemeProps;

export const Chip = React.forwardRef<HTMLDivElement, Props>(
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
            ...buttonProps
        },
        ref,
    ) => {
        const { global, button: ThemeButton } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? ThemeButton?.defaultProps?.variant;
        size = size ?? ThemeButton?.defaultProps?.size;
        ripple = ripple ?? ThemeButton?.defaultProps?.ripple;

        const rippleEffect = ripple !== undefined && new Ripple();

        const variantStyles = ChipVariants[variant][color];

        const sizeStyles = ChipSizes[size];

        return (
            <div
                {...buttonProps}
                ref={ref}
                className={twMerge(
                    [
                        "inline-block inline-flex items-center justify-center border font-medium align-middle",
                        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                        global.borderRadius,
                        global.transition,
                        ThemeButton?.styles?.base || "",
                        sizeStyles,
                        ThemeButton?.styles?.sizes[size] || "",
                    ].join(" "),
                    Object.values(variantStyles)
                        .map((item) => item)
                        .join(" "),
                    ThemeButton?.styles?.variants[variant] || "",
                    ThemeButton?.styles?.variants[color] || "",
                    className,
                    classNames?.element,
                )}
                onMouseDown={(e) => {
                    const onMouseDown = buttonProps?.onMouseDown;

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
