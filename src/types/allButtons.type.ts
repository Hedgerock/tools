import type {ToolButtonStatuses} from "../constants";

export type AllButtonsType =
    "close" | "expand" | "hide" | "abbreviation" | "uuidGenerator" | "generate" | "history" | "info" | "refresh" | "save"
export type ToolButtonType = Extract<AllButtonsType, "abbreviation" | "uuidGenerator">

export type ButtonProps = {
    buttonType: AllButtonsType;
    className: string;
    title: string;
    onClickFunc: () => void;
    buttonStatus?: ToolButtonStatuses;
    disabled?: boolean;
}

export type ButtonIconProps = {
    iconValue: string
}