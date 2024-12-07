import type {
    CodeInputMode,
    CodeInputType,
    Colors,
    InputVariants,
    Sizes,
} from "../../types/global";

export interface CodeInputThemeProps {
    variant?: InputVariants;
    size?: Sizes;
    classNames?: {
        wrapper?: string;
        input?: string;
    };
}

export interface CodeInputBaseProps {
    id: string;
    name: string;
    inputMode: CodeInputMode;
    color?: Colors;
    error?: string;
    type?: CodeInputType;
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

export interface CodeInputProps
    extends CodeInputBaseProps,
        CodeInputThemeProps {}
