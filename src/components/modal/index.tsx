import React from "react";
import { AnimatePresence, m, domAnimation, LazyMotion } from "framer-motion";
import {
    useFloating,
    useInteractions,
    useClick,
    useRole,
    useId,
    FloatingPortal,
    FloatingOverlay,
    FloatingFocusManager,
    useMergeRefs,
    useDismiss,
} from "@floating-ui/react";
import deepmerge from "deepmerge";
import { useTheme } from "~context/index";
import ModalSizes from "~styles/modal/sizes";
import type { IModalProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
    (
        {
            onClose,
            isOpen,
            shouldCloseOnOverlayClick = true,
            size,
            className,
            classNames,
            children,
            ...restProps
        },
        ref,
    ) => {
        const {
            refs: { floating },
            context,
        } = useFloating({
            open: isOpen,
            onOpenChange: onClose,
        });

        const id = useId();
        const labelId = `${id}-label`;
        const descriptionId = `${id}-description`;

        const { getFloatingProps } = useInteractions([
            useClick(context),
            useRole(context),
            useDismiss(context, {
                outsidePressEvent: "pointerdown",
                outsidePress: shouldCloseOnOverlayClick,
                escapeKey: shouldCloseOnOverlayClick,
            }),
        ]);

        const mergedRef = useMergeRefs([ref, floating]);

        const modalAnimation = {
            unmount: {
                opacity: 0,
                y: -50,
                transition: {
                    duration: 0.3,
                },
            },
            mount: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                },
            },
        };
        const backdropAnimation = {
            unmount: {
                opacity: 0,
                transition: {
                    delay: 0.2,
                },
            },
            mount: {
                opacity: 1,
            },
        };

        const { global, modal: themeProps } = useTheme();

        size = size ?? themeProps?.defaultProps?.size;
        classNames = deepmerge(
            themeProps?.defaultProps?.classNames || {},
            classNames || {},
        );

        const sizeStyles = ModalSizes[size];

        return (
            <LazyMotion features={domAnimation}>
                <FloatingPortal>
                    <AnimatePresence>
                        {isOpen && (
                            <FloatingOverlay lockScroll className="z-auto">
                                <FloatingFocusManager context={context}>
                                    <m.div
                                        className={twMerge(
                                            "flex h-full items-center justify-center border-none bg-neutral-700/75",
                                            classNames?.backdrop,
                                        )}
                                        initial="unmount"
                                        exit="unmount"
                                        animate={isOpen ? "mount" : "unmount"}
                                        variants={backdropAnimation}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <m.div
                                            {...getFloatingProps({
                                                ...restProps,
                                                ref: mergedRef,
                                                className: twMerge(
                                                    "m-4 max-h-[90%] min-h-[10%] overflow-auto bg-neutral-50 w-full",
                                                    global?.borderRadius,
                                                    sizeStyles,
                                                    classNames?.modal,
                                                ),
                                                "aria-labelledby": labelId,
                                                "aria-describedby":
                                                    descriptionId,
                                            })}
                                            initial="unmount"
                                            exit="unmount"
                                            animate={
                                                isOpen ? "mount" : "unmount"
                                            }
                                            variants={modalAnimation}
                                        >
                                            {children}
                                        </m.div>
                                    </m.div>
                                </FloatingFocusManager>
                            </FloatingOverlay>
                        )}
                    </AnimatePresence>
                </FloatingPortal>
            </LazyMotion>
        );
    },
);

export default Modal;
