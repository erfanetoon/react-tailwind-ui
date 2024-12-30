import type {
    TCodeInputMode,
    TCodeInputType,
    TColors,
    TInputVariants,
    TSizes,
} from "../../types/global";

export interface ICodeInputThemeProps {
    variant?: TInputVariants;
    size?: TSizes;
    classNames?: {
        wrapper?: string;
        input?: string;
    };
}

export interface ICodeInputBaseProps {
    id: string;
    name: string;
    inputMode: TCodeInputMode;
    color?: TColors;
    error?: string;
    type?: TCodeInputType;
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

export interface ICodeInputProps
    extends ICodeInputBaseProps,
        ICodeInputThemeProps {}
