import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import ButtonSizes from "../../styles/iconButton/sizes";
import ButtonVariants from "../../styles/iconButton/variants";
import { IconButtonProps, IconButtonThemeProps } from "./types";
import Ripple from "material-ripple-effects";
import deepmerge from "deepmerge";

type Props = IconButtonProps & IconButtonThemeProps;

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
    (
        {
            variant,
            size,
            color,
            ripple,
            loading,
            loadingIcon,
            className,
            classNames,
            children,
            ...restProps
        },
        ref,
    ) => {
        const { global, iconButton: themeProps } = useTheme();

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
                        themeProps?.styles?.base || "",
                        sizeStyles,
                        themeProps?.styles?.sizes[size] || "",
                    ].join(" "),
                    Object.values(variantStyles)
                        .map((item) => item)
                        .join(" "),
                    themeProps?.styles?.variants[variant] || "",
                    themeProps?.styles?.variants[color] || "",
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
            </button>
        );
    },
);

export default IconButton;
