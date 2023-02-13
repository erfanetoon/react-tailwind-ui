import React from "react";
import { useTheme } from "../../context";
import ClassComponent from "./component";
import { CodeInputProps, CodeInputThemeProps } from "./types";

type Props = CodeInputProps & CodeInputThemeProps;

export const CodeInput = (props: Props) => {
    const { global, codeInput: themeProps } = useTheme();

    return (
        <ClassComponent
            variant="default"
            size="md"
            color={global?.color || "blue"}
            global={global}
            themeProps={themeProps}
            {...props}
        />
    );
};

export default CodeInput;