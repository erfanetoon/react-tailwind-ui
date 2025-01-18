import { IChipThemeProps } from "~components/chip/types";
import { TColors } from "~types/global";
import Text from "./text";
import Filled from "./filled";
import Outlined from "./outlined";
import Gradient from "./gradient";
import OutlinedFilled from "./outlined_filled";

const ChipVariants: Record<
    IChipThemeProps["variant"],
    Record<TColors, Record<string, string>>
> = {
    text: Text,
    filled: Filled,
    gradient: Gradient,
    outlined: Outlined,
    outlined_filled: OutlinedFilled,
};

export default ChipVariants;
