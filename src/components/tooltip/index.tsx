import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
import {
    autoUpdate,
    useFloating,
    useInteractions,
    useHover,
    offset,
    FloatingPortal,
    useMergeRefs,
} from "@floating-ui/react";
import { useTheme } from "../../context";
import type { TooltipProps, TooltipThemeProps } from "./types";

type Props = TooltipProps & TooltipThemeProps;

export const Tooltip = React.forwardRef<HTMLDivElement, Props>(
    (
        { placement, offset: propsOffset, classNames, content, children },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);

        const { global, tooltip: themeProps } = useTheme();

        propsOffset = propsOffset ?? themeProps?.defaultProps.offset;
        placement = placement ?? themeProps?.defaultProps.placement;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const { x, y, strategy, reference, floating, context } = useFloating({
            open: isOpen,
            onOpenChange: setIsOpen,
            whileElementsMounted: autoUpdate,
            middleware: [offset(propsOffset)],
            placement: placement,
        });

        const hover = useHover(context, { move: false });

        const mergedRef = useMergeRefs([ref, floating]);
        const childMergedRef = useMergeRefs([ref, reference]);

        const { getReferenceProps, getFloatingProps } = useInteractions([
            hover,
        ]);

        return (
            <>
                {typeof children === "string" ? (
                    <span
                        {...getReferenceProps({
                            ref: childMergedRef,
                            className: classNames?.element || "",
                        })}
                    >
                        {children}
                    </span>
                ) : (
                    // @ts-ignore
                    React.cloneElement(children, {
                        ...getReferenceProps({
                            // @ts-ignore
                            ...children?.props,
                            ref: childMergedRef,
                        }),
                    })
                )}

                <FloatingPortal>
                    {isOpen && (
                        <div
                            {...getFloatingProps({
                                ref: mergedRef,
                                className: twMerge(
                                    "bg-gray-700 px-2 py-1 text-sm text-white",
                                    global.borderRadius,
                                    global.transition,
                                    classNames?.tooltip,
                                ),
                                style: {
                                    position: strategy,
                                    top: y ?? "",
                                    left: x ?? "",
                                },
                            })}
                        >
                            {content}
                        </div>
                    )}
                </FloatingPortal>
            </>
        );
    },
);

export default Tooltip;
