import {configureStore} from "@reduxjs/toolkit";
import toolButtonsReducer from "./toolButtons/toolButtonSlice.ts";
import toolButtonsHistoryReducer from "./toolButtonsHistory/toolButtonHistorySlice.ts";

export const store = configureStore({
    reducer: {
        toolButtons: toolButtonsReducer,
        toolButtonsHistory: toolButtonsHistoryReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;