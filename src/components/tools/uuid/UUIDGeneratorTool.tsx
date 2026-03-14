import type {ToolButtonTypeProp} from "../../../constants";
import {type FC, memo} from "react";
import {type UUIDGeneratorToolConf, UUIDGeneratorToolContext} from "./context";
import {generateContext} from "../../../utils";
import {useUUIDGenerateTool} from "./hooks";
import {Tool, ToolButtonHeader} from "../../../hoc";
import {UUIDOptionsSelectCollection} from "./types";
import {UUIDOption} from "./components";


export const UUIDGeneratorTool:FC<ToolButtonTypeProp> = memo(({ buttonType }) => {
    const {SelectedOptionComponent, handleSelection, showInfo, showHistory, toolState, selected} = useUUIDGenerateTool();
    const ctx = generateContext<UUIDGeneratorToolConf>
    (
        UUIDGeneratorToolContext,
        {
            SelectedOptionComponent, handleSelection, showInfo,
            showHistory, toolState, selected: selected,
            toolName: buttonType, title: "UUID generator",
        }
    )

    return (
        <Tool context={ctx}>

            <ToolButtonHeader contextKey={"uuidGenerator"}>
                <select
                    value={selected}
                    onChange={handleSelection}
                >
                    { UUIDOptionsSelectCollection.map(option => {
                        const keyOption = option[1]
                        return <UUIDOption key={keyOption} option={option}/>
                    })}
                </select>
            </ToolButtonHeader>

            <SelectedOptionComponent />
        </Tool>
    )
})