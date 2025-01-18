import React, { useId } from "react";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
import { useTheme } from "~context/index";
import SwitchSizes from "~styles/switch/sizes";
import SwitchColors from "~styles/switch/colors";
import type { ISwitchProps } from "./types";

export const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>(
    (
        {
            size,
            color,
            label,
            error,
            className,
            classNames,
            children,
            ...restProps
        },
        ref,
    ) => {
        const switchId = useId();

        const { global, switch: themeProps } = useTheme();

        color = color ?? global?.color;
        size = size ?? themeProps?.defaultProps?.size;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const sizeStyles = SwitchSizes[size];

        const colorStyles = SwitchColors[color];

        return (
            <div className={twMerge(classNames?.root)}>
                <div
                    className={twMerge(
                        "inline-flex items-center gap-2",
                        classNames?.wrapper,
                    )}
                >
                    <div
                        className={twMerge(
                            "relative inline-block cursor-pointer rounded-full",
                            sizeStyles.input,
                            classNames?.container,
                        )}
                    >
                        <input
                            {...restProps}
                            ref={ref}
                            type="checkbox"
                            id={restProps?.id || switchId}
                            className={twMerge(
                                [
                                    "peer appearance-none absolute rounded-full cursor-pointer",
                                    global?.borderRadius || "",
                                    global?.transition || "",
                                    sizeStyles.input,
                                    Object.values({
                                        background: colorStyles.background,
                                        checked: colorStyles.checked,
                                    })
                                        .map((item) => item)
                                        .join(" "),
                                    themeProps?.styles?.base || "",
                                    themeProps?.styles?.sizes[size] || "",
                                    themeProps?.styles?.colors[color] || "",
                                    !!error && "border-red-500",
                                ].join(" "),
                                className,
                                classNames?.input,
                            )}
                        />

                        <label
                            htmlFor={restProps?.id || switchId}
                            className={twMerge(
                                global?.transition || "",
                                sizeStyles?.circle,
                                Object.values({
                                    circle: colorStyles.circle,
                                    circleChecked: colorStyles.circleChecked,
                                })
                                    .map((item) => item)
                                    .join(" "),
                                classNames?.circle,
                            )}
                        >
                            <div
                                className={twMerge(
                                    global?.transition || "",
                                    sizeStyles?.circleBorder,
                                    classNames?.circleBorder,
                                )}
                            ></div>
                        </label>
                    </div>

                    {label && (
                        <label
                            htmlFor={restProps?.id || switchId}
                            className={twMerge(
                                "text-sm text-gray-600 block",
                                classNames?.label,
                            )}
                        >
                            {label}
                        </label>
                    )}
                </div>

                {error && (
                    <div
                        className={twMerge(
                            "text-xs text-red-500 block py-0.5",
                            classNames?.error,
                        )}
                    >
                        {error}
                    </div>
                )}
            </div>
        );
    },
);

export default Switch;
