// External modules
export type { Placement } from "@floating-ui/react";

// Global types
export type * from "~types/global";

// Theme context
export * from "~context/index";
export type { IThemeContext, TThemeAction } from "~context/types";

// Our tailwind base config
export { default as withTailwind } from "./withTailwind";

// Configs
export * from "~config/breakpoints";
export * from "~config/colors";
export * from "~config/fontSizes";
export * from "~config/shadows";

// Components
export * from "~components/button";
export type { IButtonProps } from "~components/button/types";
export * from "~components/chip";
export type { IChipProps } from "~components/chip/types";
export * from "~components/codeInput";
export type { ICodeInputProps } from "~components/codeInput/types";
export * from "~components/dropdown";
export type { IDropdownProps } from "~components/dropdown/types";
export * from "~components/hint";
export type { IHintProps } from "~components/hint/types";
export * from "~components/iconButton";
export type { IIconButtonProps } from "~components/iconButton/types";
export * from "~components/input";
export type { IInputProps } from "~components/input/types";
export * from "~components/modal";
export type { IModalProps } from "~components/modal/types";
export * from "~components/passwordInput";
export type { IPasswordInputProps } from "~components/passwordInput/types";
export * from "~components/switch";
export type { ISwitchProps } from "~components/switch/types";
export * from "~components/textarea";
export type { ITextareaProps } from "~components/textarea/types";
export * from "~components/tooltip";
export type { ITooltipProps } from "~components/tooltip/types";

// Hooks
export * from "~hooks/useResponsive";
