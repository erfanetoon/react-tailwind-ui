import { TextareaThemeProps } from "../../../components/textarea/types";
import { Colors } from "../../../types/global";
import Default from "./default";
import Outlined from "./outlined";

const TextareaColors: Record<
    TextareaThemeProps["variant"],
    Record<Colors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default TextareaColors;
