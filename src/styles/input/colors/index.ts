import { InputThemeProps } from "src/components/input/types";
import { Colors } from "src/types/global";
import Default from "./default";
import Outlined from "./outlined";

const InputColors: Record<
    InputThemeProps["variant"],
    Record<Colors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default InputColors;
