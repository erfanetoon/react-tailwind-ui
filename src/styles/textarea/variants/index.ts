import { TextareaThemeProps } from "../../../components/textarea/types";

const TextareaVariants: Record<TextareaThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default TextareaVariants;
