import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import deepmerge from "deepmerge";
import { useTheme } from "../../context";
import {
    autoUpdate,
    useFloating,
    useInteractions,
    useHover,
    offset,
} from "@floating-ui/react";
import type { TooltipProps, TooltipThemeProps } from "./types";

type Props = TooltipProps & TooltipThemeProps;

export const Tooltip: FC<Props> = ({
    placement,
    offset: propsOffset,
    classNames,
    content,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const { global, tooltip: themeProps } = useTheme();

    propsOffset = propsOffset ?? themeProps?.defaultProps.offset;
    placement = placement ?? themeProps?.defaultProps.placement;
    classNames = deepmerge(
        themeProps?.defaultProps?.classNames || {},
        classNames || {},
    );

    const { x, y, strategy, refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [offset(propsOffset)],
        placement: placement,
    });

    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <div className={twMerge("inline-block", classNames?.wrapper)}>
            <div
                className={twMerge(classNames?.element)}
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                {children}
            </div>

            {isOpen && (
                <div
                    ref={refs.setFloating}
                    className={twMerge(
                        "bg-gray-700 px-2 py-1 text-sm text-white",
                        global.borderRadius,
                        global.transition,
                        classNames?.tooltip,
                    )}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }}
                    {...getFloatingProps()}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
