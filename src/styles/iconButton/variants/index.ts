import { IIconButtonThemeProps } from "~components/iconButton/types";
import { TColors } from "~types/global";
import Filled from "./filled";
import Outlined from "./outlined";
import Gradient from "./gradient";
import OutlinedFilled from "./outlined_filled";
import Text from "./text";

const IconButtonVariants: Record<
    IIconButtonThemeProps["variant"],
    Record<TColors, Record<string, string>>
> = {
    text: Text,
    filled: Filled,
    gradient: Gradient,
    outlined: Outlined,
    outlined_filled: OutlinedFilled,
};

export default IconButtonVariants;
