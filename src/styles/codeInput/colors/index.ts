import { Colors } from "../../../types/global";
import Default from "./default";
import Outlined from "./outlined";
import { CodeInputThemeProps } from "../../../components/codeInput/types";

const CodeInputColors: Record<
    CodeInputThemeProps["variant"],
    Record<Colors, Record<string, string>>
> = {
    default: Default,
    outlined: Outlined,
};

export default CodeInputColors;
