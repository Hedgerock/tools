import {buttonIcons, type ToolButtonStatuses} from "../../constants";
import type {ButtonProps} from "../../types";
import {ButtonIcon} from "./ButtonIcon.tsx";


export const Button = (
    {
        className,
        onClickFunc,
        buttonType,
        title,
        buttonStatus = {} as ToolButtonStatuses,
        disabled = false
    }: ButtonProps) => {
    const iconValue = buttonIcons[buttonType];
    const { isOpen } = buttonStatus

    return (
        <button
            className={className + ` ${className}_${buttonType} ${isOpen ?? `${className}_active}`}`}
            onClick={onClickFunc}
            title={title}
            disabled={disabled}
        >
            <ButtonIcon iconValue={iconValue} />
        </button>
    )
}