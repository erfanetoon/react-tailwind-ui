import Text from "./text";
import { Colors } from "../../../types/global";
import Filled from "./filled";
import Outlined from "./outlined";
import Gradient from "./gradient";
import OutlinedFilled from "./outlined_filled";
import { IconButtonThemeProps } from "../../../components/iconButton/types";

const IconButtonVariants: Record<
    IconButtonThemeProps["variant"],
    Record<Colors, Record<string, string>>
> = {
    text: Text,
    filled: Filled,
    gradient: Gradient,
    outlined: Outlined,
    outlined_filled: OutlinedFilled,
};

export default IconButtonVariants;
