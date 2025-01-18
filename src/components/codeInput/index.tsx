import React from "react";
import { useTheme } from "~context/index";
import ClassComponent from "./component";
import type { ICodeInputProps } from "./types";

export const CodeInput = (props: ICodeInputProps) => {
    const { global, codeInput: themeProps } = useTheme();

    return (
        <ClassComponent global={global} themeProps={themeProps} {...props} />
    );
};

export default CodeInput;
