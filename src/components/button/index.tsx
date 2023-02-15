import React from "react";
import Ripple from "material-ripple-effects";
import deepmerge from "deepmerge";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import ButtonSizes from "../../styles/button/sizes";
import ButtonVariants from "../../styles/button/variants";
import type { ButtonProps, ButtonThemeProps } from "./types";

type Props = ButtonProps & ButtonThemeProps;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
    (
        {
            variant,
            size,
            ripple,
            classNames,
            color,
            fullWidth,
            loading,
            loadingIcon,
            icon,
            iconPosition = "start",
            className,
            children,
            ...restProps
        },
        ref,
    ) => {
        const { global, button: themeProps } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? themeProps?.defaultProps?.variant;
        size = size ?? themeProps?.defaultProps?.size;
        ripple = ripple ?? themeProps?.defaultProps?.ripple;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const rippleEffect = ripple !== undefined && new Ripple();

        const variantStyles = ButtonVariants[variant][color];

        const sizeStyles = ButtonSizes[size];

        return (
            <button
                {...restProps}
                type={restProps.type || "button"}
                ref={ref}
                className={twMerge(
                    [
                        "inline-flex items-center justify-center cursor-pointer border font-medium align-middle",
                        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                        global?.borderRadius || "",
                        global?.transition || "",
                        sizeStyles,
                        Object.values(variantStyles)
                            .map((item) => item)
                            .join(" "),
                        themeProps?.styles?.base || "",
                        themeProps?.styles?.sizes[size] || "",
                        themeProps?.styles?.variants[variant] || "",
                        themeProps?.styles?.colors[color] || "",
                        fullWidth ? "w-full" : "",
                    ].join(" "),
                    className,
                    classNames?.button,
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
                {!loading && !!icon && iconPosition === "start" && (
                    <div className={twMerge("me-2", classNames?.icon)}>
                        {icon}
                    </div>
                )}

                {loading ? (
                    <div
                        className={twMerge(
                            "animate-spin transition-all duration-300",
                            classNames?.loading,
                        )}
                    >
                        {!!loadingIcon && loadingIcon}
                    </div>
                ) : (
                    children
                )}

                {!loading && !!icon && iconPosition === "end" && (
                    <div className={twMerge("ms-2", classNames?.icon)}>
                        {icon}
                    </div>
                )}
            </button>
        );
    },
);

export default Button;
