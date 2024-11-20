import React from "react";
import { useTheme } from "../../context";
import ClassComponent from "./component";
import type { CodeInputProps } from "./types";

export const CodeInput = (props: CodeInputProps) => {
    const { global, codeInput: themeProps } = useTheme();

    return (
        <ClassComponent global={global} themeProps={themeProps} {...props} />
    );
};

export default CodeInput;
