import { ITextareaThemeProps } from "~components/textarea/types";

const TextareaVariants: Record<ITextareaThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default TextareaVariants;
