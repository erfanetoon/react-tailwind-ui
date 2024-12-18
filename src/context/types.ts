import { Colors, Sizes } from "../types/global";
import { ButtonThemeProps } from "../components/button/types";
import { IconButtonThemeProps } from "../components/iconButton/types";
import { InputThemeProps } from "../components/input/types";
import { ChipThemeProps } from "../components/chip/types";
import { CodeInputThemeProps } from "../components/codeInput/types";
import { TextareaThemeProps } from "../components/textarea/types";
import { HintThemeProps } from "../components/hint/types";
import { TooltipThemeProps } from "../components/tooltip/types";
import { DropdownThemeProps } from "../components/dropdown/types";

export interface ThemeContext {
    global?: {
        color?: Colors;
        direction?: "ltr" | "rtl" | null;
        shadow?: {
            base: string; // Sample is 'shadow-md'
            hover: string; // Sample is 'hover:shadow-md'
        }; // Default is false
        transition?: string; // Default is 'transition-all duration-300'
        borderRadius?: string; // Must be tailwind class for example: rounded, rounded-sm, rounded-md, rounded-lg (default is 'rounded')
    };
    button?: {
        defaultProps?: ButtonThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<ButtonThemeProps["variant"], string>>;
        };
    };
    chip?: {
        defaultProps?: ChipThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<ChipThemeProps["variant"], string>>;
        };
    };
    codeInput?: {
        defaultProps?: CodeInputThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<CodeInputThemeProps["variant"], string>>;
        };
    };
    dropdown?: {
        defaultProps?: DropdownThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
        };
    };
    hint?: {
        defaultProps?: HintThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
        };
    };
    iconButton?: {
        defaultProps?: IconButtonThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<IconButtonThemeProps["variant"], string>>;
        };
    };
    input?: {
        defaultProps?: InputThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<InputThemeProps["variant"], string>>;
        };
    };
    passwordInput?: {
        defaultProps?: InputThemeProps;
    };
    textarea?: {
        defaultProps?: TextareaThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<TextareaThemeProps["variant"], string>>;
        };
    };
    tooltip?: {
        defaultProps?: TooltipThemeProps;
        styles?: {
            base?: string;
        };
    };
}

export type ThemeAction = (data: ThemeContext) => void;
