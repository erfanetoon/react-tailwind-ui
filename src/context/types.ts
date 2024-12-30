import { TColors, TSizes } from "../types/global";
import { IButtonThemeProps } from "../components/button/types";
import { IIconButtonThemeProps } from "../components/iconButton/types";
import { IInputThemeProps } from "../components/input/types";
import { IChipThemeProps } from "../components/chip/types";
import { ICodeInputThemeProps } from "../components/codeInput/types";
import { ITextareaThemeProps } from "../components/textarea/types";
import { IHintThemeProps } from "../components/hint/types";
import { ITooltipThemeProps } from "../components/tooltip/types";
import { IDropdownThemeProps } from "../components/dropdown/types";

export interface IThemeContext {
    global?: {
        color?: TColors;
        direction?: "ltr" | "rtl" | null;
        shadow?: {
            base: string; // Sample is 'shadow-md'
            hover: string; // Sample is 'hover:shadow-md'
        }; // Default is false
        transition?: string; // Default is 'transition-all duration-300'
        borderRadius?: string; // Must be tailwind class for example: rounded, rounded-sm, rounded-md, rounded-lg (default is 'rounded')
    };
    button?: {
        defaultProps?: IButtonThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<Record<IButtonThemeProps["variant"], string>>;
        };
    };
    chip?: {
        defaultProps?: IChipThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<Record<IChipThemeProps["variant"], string>>;
        };
    };
    codeInput?: {
        defaultProps?: ICodeInputThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<Record<ICodeInputThemeProps["variant"], string>>;
        };
    };
    dropdown?: {
        defaultProps?: IDropdownThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
        };
    };
    hint?: {
        defaultProps?: IHintThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
        };
    };
    iconButton?: {
        defaultProps?: IIconButtonThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<
                Record<IIconButtonThemeProps["variant"], string>
            >;
        };
    };
    input?: {
        defaultProps?: IInputThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<Record<IInputThemeProps["variant"], string>>;
        };
    };
    passwordInput?: {
        defaultProps?: IInputThemeProps;
    };
    textarea?: {
        defaultProps?: ITextareaThemeProps;
        styles?: {
            base?: string;
            colors?: Partial<Record<TColors, string>>;
            sizes?: Partial<Record<TSizes, string>>;
            variants?: Partial<Record<ITextareaThemeProps["variant"], string>>;
        };
    };
    tooltip?: {
        defaultProps?: ITooltipThemeProps;
        styles?: {
            base?: string;
        };
    };
}

export type TThemeAction = (data: IThemeContext) => void;
