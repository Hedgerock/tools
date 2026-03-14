import type {RootState} from "../../store.ts";
import {createSelector} from "@reduxjs/toolkit";
import type {ToolButtonType} from "../../../types";

export const selectToolKey = (_: RootState, toolKey: ToolButtonType) => toolKey;

const selectToolHistory = (state: RootState, toolKey: ToolButtonType) => {
    return state.toolButtonsHistory.value[toolKey].content;
};

export const selectFilterHistory = createSelector(
    [
        selectToolHistory,
        (_: RootState, __: ToolButtonType, isAll: boolean) => isAll,
        (_: RootState, __: ToolButtonType, ___: boolean, toolType: string) => toolType
    ],
    (content, isAllHistory, toolType) => {
        return content.filter(el =>
            !isAllHistory || el.internalToolId === toolType
        );
    }
);