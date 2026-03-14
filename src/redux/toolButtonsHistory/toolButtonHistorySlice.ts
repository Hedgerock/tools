import type {ToolButtonType} from "../../types";
import {type CurrentButtonHistory, HISTORY_KEY, type ToolButtonHistory, toolButtonsHistory} from "../../constants";
import {getLocalStorage, saveLocalStorage} from "../../utils";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type ToolButtonHistoryState = {
    currentId: number,
    value: Record<ToolButtonType, ToolButtonHistory>
}

const newHistory: ToolButtonHistoryState = {
    currentId: 1,
    value: toolButtonsHistory
}

const initialState: ToolButtonHistoryState = getLocalStorage(HISTORY_KEY, newHistory);

export type NewHistoryProps = {
    id: ToolButtonType;
    content: CurrentButtonHistory;
}

type ItemForRemoveArgs = {
    toolButtonId: ToolButtonType,
    id: number
}

export const toolButtonHistorySlice = createSlice({
    name: "toolButtonsHistory",
    initialState,
    reducers: {
        incrementId: (state) => {
            state.currentId = state.currentId + 1
            saveLocalStorage(HISTORY_KEY, state)
        },
        addHistory: (state, action: PayloadAction<NewHistoryProps>) => {
            const id = action.payload.id;
            const value = action.payload.content;

            state.value[id].content.unshift(value);

            saveLocalStorage(HISTORY_KEY, state);
        },
        removeHistoryElement: (state, action: PayloadAction<ItemForRemoveArgs>) => {
            const toolButtonId = action.payload.toolButtonId;
            const historyId = action.payload.id;

            state.value[toolButtonId].content =
                state.value[toolButtonId].content
                    .filter(history => history.id !== historyId)

            saveLocalStorage(HISTORY_KEY, state);
        },
        clearHistory: (state, action: PayloadAction<{id: ToolButtonType}>) => {
            state.value[action.payload.id].content = [{} as CurrentButtonHistory]
            saveLocalStorage(HISTORY_KEY, state);
        }
    }
})

export const { addHistory, clearHistory, removeHistoryElement, incrementId } = toolButtonHistorySlice.actions;
export default  toolButtonHistorySlice.reducer