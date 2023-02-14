import { Colors, Sizes } from "../types/global";
import { ButtonThemeProps } from "../components/button/types";
import { IconButtonThemeProps } from "../components/iconButton/types";
import { InputThemeProps } from "../components/input/types";
import { ChipThemeProps } from "../components/chip/types";
import { CodeInputThemeProps } from "../components/codeInput/types";
import { TextareaThemeProps } from "src/components/textarea/types";

export interface ThemeContext {
    global?: {
        color?: Colors;
        direction?: "ltr" | "rtl";
        transition?: string;
        borderRadius?: string;
    };
    button?: {
        defaultProps?: Required<ButtonThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<ButtonThemeProps["variant"], string>>;
        };
    };
    chip?: {
        defaultProps?: Required<ChipThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<ChipThemeProps["variant"], string>>;
        };
    };
    codeInput?: {
        defaultProps?: Required<CodeInputThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<CodeInputThemeProps["variant"], string>>;
        };
    };
    iconButton?: {
        defaultProps?: Required<IconButtonThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<IconButtonThemeProps["variant"], string>>;
        };
    };
    input?: {
        defaultProps?: Required<InputThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<InputThemeProps["variant"], string>>;
        };
    };
    textarea?: {
        defaultProps?: Required<TextareaThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<TextareaThemeProps["variant"], string>>;
        };
    };
}

export type ThemeAction = (data: ThemeContext) => void;
