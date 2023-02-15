import React from "react";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
import { useTheme } from "../../context";
import InputSizes from "../../styles/input/sizes";
import InputColors from "../../styles/input/colors";
import InputVariants from "../../styles/input/variants";
import type { InputProps, InputThemeProps } from "./types";

type Props = InputProps & InputThemeProps;

export const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            variant,
            size,
            color,
            icon,
            iconPosition,
            label,
            error,
            className,
            classNames,
            children,
            ...restProps
        },
        ref,
    ) => {
        const { global, input: themeProps } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? themeProps?.defaultProps?.variant;
        size = size ?? themeProps?.defaultProps?.size;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const sizeStyles = InputSizes[size];

        const variantStyles = InputVariants[variant];

        const colorStyles = InputColors[variant][color];

        return (
            <div className={twMerge(classNames?.root)}>
                {label && (
                    <label
                        className={twMerge(
                            "text-sm text-gray-600 block",
                            classNames?.label,
                        )}
                        htmlFor={restProps.id}
                    >
                        {label}
                    </label>
                )}

                <div className={twMerge("relative", classNames?.wrapper)}>
                    {!!icon && iconPosition === "start" && (
                        <div
                            className={twMerge(
                                "absolute top-0 start-0 flex h-full w-8 items-center justify-center",
                                classNames?.icon,
                            )}
                        >
                            {icon}
                        </div>
                    )}

                    <input
                        {...restProps}
                        className={twMerge(
                            [
                                "w-full text-gray-700 outline-none",
                                "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                                global?.borderRadius || "",
                                global?.transition || "",
                                sizeStyles,
                                variantStyles,
                                Object.values(colorStyles)
                                    .map((item) => item)
                                    .join(" "),
                                themeProps?.styles?.base || "",
                                themeProps?.styles?.sizes[size] || "",
                                themeProps?.styles?.colors[color] || "",
                                themeProps?.styles?.variants[variant] || "",
                                !!icon && iconPosition === "start" && "ps-8",
                                !!icon && iconPosition === "end" && "pe-8",
                                !!error && "border-red-500",
                            ].join(" "),
                            className,
                            classNames?.input,
                        )}
                        ref={ref}
                    />

                    {!!icon && iconPosition === "end" && (
                        <div
                            className={twMerge(
                                "absolute top-0 end-0 flex h-full w-8 items-center justify-center",
                                classNames?.icon,
                            )}
                        >
                            {icon}
                        </div>
                    )}
                </div>

                {error && (
                    <span
                        className={twMerge(
                            "text-xs text-red-500 block py-0.5",
                            classNames?.error,
                        )}
                    >
                        {error}
                    </span>
                )}
            </div>
        );
    },
);

export default Input;
