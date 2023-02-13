import { CodeInputThemeProps } from "../../../components/codeInput/types";

const CodeInputVariants: Record<CodeInputThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default CodeInputVariants;
