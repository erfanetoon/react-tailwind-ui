import { ICodeInputThemeProps } from "~components/codeInput/types";
import { TColors } from "~types/global";
import Default from "./default";
import Outlined from "./outlined";

const CodeInputTColors: Record<
    ICodeInputThemeProps["variant"],
    Record<TColors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default CodeInputTColors;
