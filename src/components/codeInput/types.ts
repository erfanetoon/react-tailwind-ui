import type { Colors, Sizes } from "../../types/global";

export interface CodeInputThemeProps {
    variant?: "default" | "outlined";
    size?: Sizes;
    classNames?: {
        wrapper?: string;
        input?: string;
    };
}

export interface CodeInputProps {
    id: string;
    name: string;
    inputMode:
        | "verbatim"
        | "latin"
        | "latin-name"
        | "latin-prose"
        | "full-width-latin"
        | "kana"
        | "kana-name"
        | "katakana"
        | "numeric"
        | "tel"
        | "email"
        | "url";
    color?: Colors;
    error?: string;
    type?: "text" | "number" | "password" | "tel";
    fields?: number;
    placeholder?: string;
    value?: string;
    isValid?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    inputStyleInvalid?: React.CSSProperties;
    autoFocus?: boolean;
    forceUppercase?: boolean;
    filterKeyCodes?: Array<number>;
    filterChars?: Array<string>;
    filterCharsIsWhitelist?: boolean;
    pattern?: string;
    onChange?: (value: string) => void;
    touch?: (name: string) => void;
    untouch?: (name: string) => void;
}
