import {type ContextCollections, useCurrentContext} from "../../../../hooks";
import {useHeaderButtons} from "../../hooks/useHeaderButtons.ts";
import type {ToolContextGeneralFields} from "../../../../utils";
import {Button} from "../../../../ui";

import "./ButtonsBox.css";

type ButtonsBoxProps<T extends keyof ContextCollections> = {
    contextKey: T;
}

export const ButtonsBox =
    <T extends keyof ContextCollections,>({ contextKey }: ButtonsBoxProps<T>) => {
    const { title, toolName } = useCurrentContext(contextKey) as ToolContextGeneralFields;
    const { hideFunc, expandFunc, closeFunc } = useHeaderButtons(toolName);

    return (
        <div className={"tool-skeleton-header-buttons-box"}>
            <Button
                buttonType={"hide"}
                className={"tool-skeleton-header-buttons-box__btn"}
                title={`Hide ${title}`}
                onClickFunc={hideFunc}
            />

            <Button
                buttonType={"expand"}
                className={"tool-skeleton-header-buttons-box__btn"}
                title={`Expand ${title}`}
                onClickFunc={expandFunc}
            />

            <Button
                buttonType={"close"}
                className={"tool-skeleton-header-buttons-box__btn"}
                title={`Close ${title}`}
                onClickFunc={closeFunc}
            />
        </div>
    )
}