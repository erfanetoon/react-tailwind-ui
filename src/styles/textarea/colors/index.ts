import { ITextareaThemeProps } from "~components/textarea/types";
import { TColors } from "~types/global";
import Default from "./default";
import Outlined from "./outlined";

const TextareaColors: Record<
    ITextareaThemeProps["variant"],
    Record<TColors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default TextareaColors;
