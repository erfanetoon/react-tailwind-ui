import React, { Fragment, MouseEvent, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
import { useTheme } from "~context/index";
import DropdownPlacements from "~styles/dropdown/placements";
import DropdownSizes from "~styles/dropdown/sizes";
import DropdownColors from "~styles/dropdown/colors";
import type { IDropdownProps } from "./types";

export const Dropdown = React.forwardRef<HTMLDivElement, IDropdownProps>(
    (
        {
            placement,
            offset: propsOffset,
            classNames,
            color,
            dropdownRender,
            items = [],
            trigger = "hover",
            size,
            children,
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);

        const { global, dropdown: themeProps } = useTheme();

        color = color ?? global?.color;
        size = size ?? themeProps?.defaultProps?.size;
        placement = placement ?? themeProps?.defaultProps.placement;
        propsOffset = propsOffset ?? themeProps?.defaultProps.offset;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const placementStyles = DropdownPlacements[placement];
        const sizeStyles = DropdownSizes[size];
        const colorStyles = DropdownColors[color];

        useEffect(() => {
            if (!isOpen) {
                return undefined;
            }

            window.addEventListener("click", handleClose);
        }, [isOpen]);

        const handleClose = () => {
            setIsOpen(false);

            window.removeEventListener("click", handleClose);
        };

        const handleClick = (e: MouseEvent<HTMLDivElement>) => {
            if (trigger === "click") {
                e.stopPropagation();

                setIsOpen(!isOpen);
            }
        };

        return (
            <div
                className={twMerge(
                    "group relative inline-block",
                    classNames?.wrapper,
                )}
            >
                {typeof children === "string" ? (
                    <span
                        className={twMerge(
                            "cursor-pointer",
                            sizeStyles.target,
                            colorStyles.target,
                            classNames?.target,
                        )}
                        onClick={handleClick}
                    >
                        {children}
                    </span>
                ) : (
                    // @ts-ignore
                    React.cloneElement(children, {
                        // @ts-ignore
                        ...children?.props,
                        onClick: handleClick,
                    })
                )}

                <div
                    className={twMerge(
                        "absolute",
                        trigger === "hover" &&
                            "group-hover:visible group-hover:z-10 group-hover:opacity-100",
                        trigger === "click" && isOpen
                            ? "visible z-10 opacity-100"
                            : "invisible -z-10 opacity-0",
                        global.transition,
                        placementStyles,
                    )}
                    style={{
                        paddingTop: `${propsOffset}px`,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul
                        className={twMerge(
                            "w-48 bg-white p-1 shadow",
                            global.borderRadius,
                            global.transition,
                            classNames?.dropdown,
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!!dropdownRender && dropdownRender}

                        {!dropdownRender &&
                            items.map((item, i) => (
                                <Fragment key={i}>
                                    {item.divider === "before" && (
                                        <div
                                            className={twMerge(
                                                "my-1 h-0.5 bg-gray-100",
                                                classNames?.divider,
                                            )}
                                        />
                                    )}

                                    {item.customRender ? (
                                        <li key={i}>
                                            <item.customRender />
                                        </li>
                                    ) : (
                                        <li
                                            key={i}
                                            className={twMerge(
                                                [
                                                    "cursor-pointer",
                                                    sizeStyles.item,
                                                    colorStyles.item,
                                                    global.borderRadius,
                                                    global.transition,
                                                ].join(" "),
                                                classNames?.item,
                                            )}
                                            onClick={item.onClick}
                                        >
                                            {item.icon && (
                                                <div
                                                    className={twMerge(
                                                        "ltr:mr-2 w-5 rtl:ml-2",
                                                        colorStyles.icon,
                                                        classNames?.icon,
                                                    )}
                                                >
                                                    {item.icon}
                                                </div>
                                            )}

                                            {item.label}
                                        </li>
                                    )}

                                    {item.divider === "after" && (
                                        <div
                                            className={twMerge(
                                                "my-1 h-0.5 rounded-lg bg-gray-100",
                                                classNames?.divider,
                                            )}
                                        />
                                    )}
                                </Fragment>
                            ))}
                    </ul>
                </div>
            </div>
        );
    },
);

export default Dropdown;
