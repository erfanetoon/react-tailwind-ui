import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Input from "../input";
import { InputProps, InputThemeProps } from "../input/types";
import { useTheme } from "src/context";
import deepmerge from "deepmerge";

type Props = InputProps & InputThemeProps;

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
    ({ classNames, ...inputProps }, ref) => {
        const [isShow, setIsShow] = useState(false);

        const { passwordInput: themeProps } = useTheme();

        return (
            <Input
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
                            onClick={() =>
                                !inputProps.disabled && setIsShow(false)
                            }
                        />
                    ) : (
                        <IoEyeOutline
                            className="cursor-pointer text-lg text-gray-500 transition-all duration-300 hover:text-pink-500"
                            onClick={() =>
                                !inputProps.disabled && setIsShow(true)
                            }
                        />
                    )
                }
                iconPosition="end"
            />
        );
    },
);

export default PasswordInput;
