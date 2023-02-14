import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context";
import TextareaSizes from "../../styles/textarea/sizes";
import TextareaColors from "../../styles/textarea/colors";
import TextareaVariants from "../../styles/textarea/variants";
import { TextareaProps, TextareaThemeProps } from "./types";

type Props = TextareaProps & TextareaThemeProps;

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
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

        const sizeStyles = TextareaSizes[size];

        const variantStyles = TextareaVariants[variant];

        const colorStyles = TextareaColors[variant][color];

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

                    <textarea
                        {...restProps}
                        className={twMerge(
                            [
                                "w-full text-gray-700 outline-none",
                                "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                                global?.borderRadius || "",
                                global?.transition || "",
                                themeProps?.styles?.base || "",
                                sizeStyles,
                                themeProps?.styles?.sizes[size] || "",
                            ].join(" "),
                            Object.values(colorStyles)
                                .map((item) => item)
                                .join(" "),
                            themeProps?.styles?.colors[color] || "",
                            variantStyles,
                            themeProps?.styles?.variants[variant] || "",
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

export default Textarea;
