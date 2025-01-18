import { ICodeInputThemeProps } from "~components/codeInput/types";

const CodeInputVariants: Record<ICodeInputThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default CodeInputVariants;
