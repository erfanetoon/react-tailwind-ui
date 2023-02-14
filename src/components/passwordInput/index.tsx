import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Input from "../input";
import { InputProps, InputThemeProps } from "../input/types";

type Props = InputProps & InputThemeProps;

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
    ({ ...inputProps }, ref) => {
        const [isShow, setIsShow] = useState(false);

        return (
            <Input
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
