import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import { InputProps, InputThemeProps } from "./types";
import InputSizes from "../../styles/input/sizes";
import InputColors from "../../styles/input/colors";
import InputVariants from "../../styles/input/variants";

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
            ...inputProps
        },
        ref,
    ) => {
        const { global, input: ThemeInput } = useTheme();

        color = color ?? global?.color;
        variant = variant ?? ThemeInput?.defaultProps?.variant;
        size = size ?? ThemeInput?.defaultProps?.size;

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
                        htmlFor={inputProps.id}
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
                        {...inputProps}
                        className={twMerge(
                            [
                                "w-full text-gray-700 outline-none",
                                "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                                global?.borderRadius || "",
                                global?.transition || "",
                                ThemeInput?.styles?.base || "",
                                sizeStyles,
                                ThemeInput?.styles?.sizes[size] || "",
                            ].join(" "),
                            Object.values(colorStyles)
                                .map((item) => item)
                                .join(" "),
                            ThemeInput?.styles?.colors[color] || "",
                            variantStyles,
                            ThemeInput?.styles?.variants[variant] || "",
                            !!icon && iconPosition === "start" && "ps-8",
                            !!icon && iconPosition === "end" && "pe-8",
                            !!error && "border-red-500",
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
