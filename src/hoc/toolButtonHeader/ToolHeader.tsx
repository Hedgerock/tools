import type {FC} from "react";
import {Button, H3} from "../../ui";
import {useCurrentContext} from "../../hooks";
import type {ToolContextGeneralFields} from "../../utils";
import type {ToolButtonType} from "../../types";

import "./ToolHeader.css";

export const ToolButtonHeader: FC<{ children: React.ReactNode, contextKey: ToolButtonType }> = ({ children, contextKey }) => {
    const { toolState, showHistory, showInfo } = useCurrentContext(contextKey) as ToolContextGeneralFields;

    return (
        <div className={"tool-header-box"}>
            <Button
                buttonType={toolState !== "info" ? "info" : "close"}
                className={"tool-header-box__info-btn"}
                title={`${toolState !== "info" ? "Show" : "Close"} info`}
                onClickFunc={showInfo}
            />
            <H3 className={"tool-header-box__title"}>UUID options</H3>

            { children }

            <Button
                buttonType={toolState !== "history" ? "history" : "close"}
                className={"tool-header-box__history-btn"}
                title={`${toolState !== "history" ? "Show" : "Close"} history`}
                onClickFunc={showHistory}
            />
        </div>
    )
}