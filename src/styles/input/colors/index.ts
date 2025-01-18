import { IInputThemeProps } from "~components/input/types";
import { TColors } from "~types/global";
import Default from "./default";
import Outlined from "./outlined";

const InputColors: Record<
    IInputThemeProps["variant"],
    Record<TColors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default InputColors;
