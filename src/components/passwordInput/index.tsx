import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Input from "~components/input";
import { useTheme } from "~context/index";
import deepmerge from "deepmerge";
import { IPasswordInputProps } from "./types";

export const PasswordInput = React.forwardRef<
    HTMLInputElement,
    IPasswordInputProps
>(({ classNames, size, variant, ...inputProps }, ref) => {
    const [isShow, setIsShow] = useState(false);

    const { passwordInput: themeProps } = useTheme();

    return (
        <Input
            size={size ?? themeProps?.defaultProps?.size}
            variant={variant ?? themeProps?.defaultProps?.variant}
            classNames={deepmerge(
                themeProps?.defaultProps?.classNames || {},
                classNames || {},
            )}
            {...inputProps}
            ref={ref}
            type={isShow ? "text" : "password"}
            icon={
                isShow ? (
                    <IoEyeOffOutline
                        className="cursor-pointer text-lg text-gray-500 transition-all duration-300 hover:text-pink-500"
                        onClick={() => !inputProps.disabled && setIsShow(false)}
                    />
                ) : (
                    <IoEyeOutline
                        className="cursor-pointer text-lg text-gray-500 transition-all duration-300 hover:text-pink-500"
                        onClick={() => !inputProps.disabled && setIsShow(true)}
                    />
                )
            }
            iconPosition="end"
        />
    );
});

export default PasswordInput;
