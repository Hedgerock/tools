import {type Context, createContext} from "react";
import type {ContextType, ToolButtonType} from "../types";
import type {OptionState} from "../components/tools/uuid/types";

type DefaultContextFields = {
    toolState: OptionState; toolName: ToolButtonType; title: string; showInfo: () => void; showHistory: () => void
}

export type ToolContextGeneralFields<T = void> =
    T extends void
        ? DefaultContextFields & { selected: string }
        : DefaultContextFields & { selected: keyof T; }

export const createToolContext = <T extends ToolContextGeneralFields>() => {
    return createContext({} as T);
}

export const createCurrentContext = <T>() => {
    return createContext<T>({} as T);
}

export const generateContext =
    <T,>(context: Context<T>, value: T): ContextType<T> => {

    return {
        Context: context,
        value
    }
}