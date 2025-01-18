import { IInputThemeProps } from "~components/input/types";

const InputVariants: Record<IInputThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default InputVariants;
