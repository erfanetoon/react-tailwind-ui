import React from "react";
import { useTheme } from "../../context";
import ClassComponent from "./component";
import type { CodeInputProps, CodeInputThemeProps } from "./types";

type Props = CodeInputProps & CodeInputThemeProps;

export const CodeInput = (props: Props) => {
    const { global, codeInput: themeProps } = useTheme();

    return (
        <ClassComponent global={global} themeProps={themeProps} {...props} />
    );
};

export default CodeInput;
