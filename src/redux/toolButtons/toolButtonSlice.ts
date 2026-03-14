import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {BUTTONS_KEY, type ToolButtonConf, toolButtons} from "../../constants";
import {getLocalStorage, saveLocalStorage} from "../../utils";
import type {ToolButtonType} from "../../types";

export type ToolButtonState = {
    value: Record<ToolButtonType, ToolButtonConf>
}

const initialState: ToolButtonState = {
    value: getLocalStorage(BUTTONS_KEY, toolButtons)
}

export const toolButtonsSlice = createSlice({
    name: "toolButtons",
    initialState,
    reducers: {
        updateOpenStatus: (state, action: PayloadAction<ToolButtonType>)=> {
            const button = state.value[action.payload]
            button.isOpen = !button.isOpen

            if (button.isExpanded) {
                button.isExpanded = false
            }

            if (button.isHidden) {
                button.isHidden = false
            }

            saveLocalStorage(BUTTONS_KEY, state.value)
        },
        updateHiddenStatus: (state, action: PayloadAction<ToolButtonType>)=> {
            const button = state.value[action.payload]
            button.isHidden = !button.isHidden

            saveLocalStorage(BUTTONS_KEY, state.value)
        },
        updateExpandStatus: (state, action: PayloadAction<ToolButtonType>)=> {
            const button = state.value[action.payload]
            button.isExpanded = !button.isExpanded

            if (button.isHidden) {
                button.isHidden = false
                button.isExpanded = true
            }

            saveLocalStorage(BUTTONS_KEY, state.value)
        },
    }
})

export const { updateOpenStatus, updateHiddenStatus, updateExpandStatus } = toolButtonsSlice.actions;
export default toolButtonsSlice.reducer;