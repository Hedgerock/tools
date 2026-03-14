import {useCallback, useState} from "react";
import type {OptionState} from "../components/tools/uuid/types";

export const useHistoryAndInfo = () => {
    const [ toolState, setToolState ] = useState<OptionState>("main")

    const showHistory = useCallback(() => {
        setToolState(toolState === "history" ? "main" : "history")
    }, [toolState])

    const showInfo = useCallback(() => {
        setToolState(toolState === "info" ? "main" : "info")
    }, [toolState])

    return { toolState, setToolState, showHistory, showInfo }
}