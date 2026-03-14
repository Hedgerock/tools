import {toolInfoCollection, type ToolInfoElements} from "../../../../constants";
import {useCurrentContext} from "../../../../hooks";
import type {FC} from "react";
import type {ToolButtonType} from "../../../../types";
import {H3} from "../../../../ui";

export const ToolInfoComponent: FC<{ contextKey: ToolButtonType }> = ({ contextKey }) => {
    const { toolName, selected } = useCurrentContext(contextKey)

    const text = toolInfoCollection[selected as ToolInfoElements ?? toolName]
        .split("\n\n");

    return (
        <>
            <H3 className={"tools-info__title"}>Tool info { selected ?? toolName }</H3>
            <div style={{
                    textAlign: "justify",
                    overflowY: "auto",
                    maxHeight: "78%",
                    padding: ".3rem",
                    border:  "1px solid white",
                    borderRadius: ".4rem"
                }}>
                { text.map((el, index) => <p key={index}>{ el }</p>) }
            </div>
        </>
    )
}