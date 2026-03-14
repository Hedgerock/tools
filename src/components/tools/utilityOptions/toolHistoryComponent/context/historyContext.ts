import type {ToolButtonType} from "../../../../../types";
import type {CurrentButtonHistory} from "../../../../../constants";
import {createCurrentContext} from "../../../../../utils";

export type HistoryContextFields = {
    isAllHistory: boolean;
    contextKey: ToolButtonType;
    histories: CurrentButtonHistory[];
    isConstantOption: boolean;
}

export const historyContext = createCurrentContext<HistoryContextFields>();