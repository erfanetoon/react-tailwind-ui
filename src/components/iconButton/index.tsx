import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import ButtonSizes from "../../styles/iconButton/sizes";
import ButtonVariants from "../../styles/iconButton/variants";
import { IconButtonProps, IconButtonThemeProps } from "./types";
import Ripple from "material-ripple-effects";

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
            ...buttonProps
        },
        ref,
    ) => {
        const { global, iconButton: ThemeIconButton } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? ThemeIconButton?.defaultProps?.variant;
        size = size ?? ThemeIconButton?.defaultProps?.size;
        ripple = ripple ?? ThemeIconButton?.defaultProps?.ripple;

        const rippleEffect = ripple !== undefined && new Ripple();

        const variantStyles = ButtonVariants[variant][color];

        const sizeStyles = ButtonSizes[size];

        return (
            <button
                {...buttonProps}
                type={buttonProps.type || "button"}
                ref={ref}
                className={twMerge(
                    [
                        "inline-flex items-center justify-center cursor-pointer border font-medium align-middle",
                        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                        global.borderRadius,
                        global.transition,
                        ThemeIconButton?.styles?.base || "",
                        sizeStyles,
                        ThemeIconButton?.styles?.sizes[size] || "",
                    ].join(" "),
                    Object.values(variantStyles)
                        .map((item) => item)
                        .join(" "),
                    ThemeIconButton?.styles?.variants[variant] || "",
                    ThemeIconButton?.styles?.variants[color] || "",
                    className,
                    classNames?.button,
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
