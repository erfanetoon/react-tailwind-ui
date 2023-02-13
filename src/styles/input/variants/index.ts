import { InputThemeProps } from "src/components/input/types";

const InputVariants: Record<InputThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default InputVariants;
