import {type FC, memo} from "react";
import {useDispatch} from "react-redux";
import type {ToolButtonConf} from "../../constants";
import {updateHiddenStatus, updateOpenStatus} from "../../redux";
import {camelCaseToSnake} from "../../utils";
import {Button} from "../../ui";

export const ToolIcons: FC<{ tool: ToolButtonConf }> = memo(({ tool }) => {
    const { buttonType, isExpanded, isOpen, isHidden } = tool
    const dispatch = useDispatch();

    const initDispatch = () => {
        dispatch(isOpen ? updateHiddenStatus(buttonType) : updateOpenStatus(buttonType))
    }

    const buttonTitle = camelCaseToSnake(buttonType);

    return (
        <Button
            buttonType={buttonType}
            className={`tools-icons__tool-button ${isOpen ? "tools-icons__tool-button_active" : ""}`}
            title={buttonTitle}
            onClickFunc={initDispatch}
            buttonStatus={{ isOpen, isExpanded, isHidden }}
        />
    )
})