import { InputThemeProps } from "../../../components/input/types";

const InputVariants: Record<InputThemeProps["variant"], string> = {
    default: "border",
    outlined: "border-b rounded-none",
};

export default InputVariants;
