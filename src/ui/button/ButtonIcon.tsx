import type {FC} from "react";
import type {ButtonIconProps} from "../../types";

export const ButtonIcon: FC<ButtonIconProps> = ({ iconValue }) => {

    return (
        <i className={ iconValue }></i>
    )
}