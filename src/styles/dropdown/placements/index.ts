import { DropdownThemeProps } from "../../../components/dropdown/types";

const DropdownPlacements: Record<DropdownThemeProps["placement"], string> = {
    bottomStart: "top-full rtl:right-0 rtl:left-auto left-0",
    bottomEnd: "top-full rtl:left-0 rtl:right-auto right-0",
    endBottom: "top-0 left-full rtl:left-auto rtl:right-full",
    endTop: "bottom-0 left-full rtl:left-auto rtl:right-full",
    startBottom: "top-0 right-full rtl:right-auto rtl:left-full",
    startTop: "bottom-0 right-full rtl:right-auto rtl:left-full",
    topStart: "bottom-full rtl:right-0 rtl:left-auto left-0",
    topEnd: "bottom-full rtl:left-0 rtl:right-auto right-0",
};

export default DropdownPlacements;
