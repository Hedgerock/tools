import {type ChangeEvent, useCallback, useState} from "react";
import {UUIDOptionComponents, type UUIDOptionFields} from "../types";
import {useHistoryAndInfo} from "../../../../hooks";

export const useUUIDGenerateTool = () => {
    const [ selected, setSelected ] = useState<UUIDOptionFields>("v4")
    const { toolState, setToolState, showHistory, showInfo } = useHistoryAndInfo();
    const SelectedOptionComponent = UUIDOptionComponents[selected][toolState];

    const handleSelection = useCallback((e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        setSelected(e.target.value as UUIDOptionFields)

        if (toolState !== "main") {
            setToolState("main")
        }
    }, [setToolState, toolState])
    
    return { SelectedOptionComponent, handleSelection, showInfo, showHistory, toolState, selected }
}