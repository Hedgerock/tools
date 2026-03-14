import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {updateExpandStatus, updateHiddenStatus, updateOpenStatus} from "../../../redux";
import type {ToolButtonType} from "../../../types";

export const useHeaderButtons = (toolName: ToolButtonType) => {
    const dispatch = useDispatch();

    const hideFunc = useCallback(() => {
        dispatch(updateHiddenStatus(toolName))
    }, [dispatch, toolName])

    const expandFunc = useCallback(() => {
        dispatch(updateExpandStatus(toolName))
    }, [dispatch, toolName])

    const closeFunc = useCallback(() => {
        dispatch(updateOpenStatus(toolName))
    }, [dispatch, toolName])

    return { hideFunc, expandFunc, closeFunc }
}