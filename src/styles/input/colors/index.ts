import { InputThemeProps } from "../../../components/input/types";
import { Colors } from "../../../types/global";
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
