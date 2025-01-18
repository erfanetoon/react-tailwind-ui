import { TSizes } from "~types/global";

const DropdownSizes: Record<TSizes, { target: string; item: string }> = {
    xs: {
        target: "text-xs py-3.5 h-[1.875rem]",
        item: "text-xs py-2 px-2 h-[1.875rem]",
    },
    sm: {
        target: "text-sm py-3.5 h-[1.875rem]",
        item: "text-sm py-2 px-3 h-[2.125rem]",
    },
    md: {
        target: "text-sm py-3.5 h-[1.875rem]",
        item: "text-sm py-2.5 px-4 h-[2.375rem]",
    },
    lg: {
        target: "text-base py-3.5 h-[1.875rem]",
        item: "text-base py-3 px-5 h-[2.875rem]",
    },
    xl: {
        target: "text-lg py-3.5 h-[1.875rem]",
        item: "text-lg py-3.5 px-6 h-[3.375rem]",
    },
    "2xl": {
        target: "text-lg py-4 h-[1.875rem]",
        item: "text-lg py-4 px-6 h-[3.875rem]",
    },
};

export default DropdownSizes;
