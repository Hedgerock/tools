import {type Context, useContext} from "react";
import {type AbbreviationToolConf, abbreviationToolContext} from "../components/tools/abbreviation/context";
import {type UUIDGeneratorToolConf, UUIDGeneratorToolContext} from "../components/tools/uuid/context";
import {
    uuidBoxContext,
    type UUIDBoxContext
} from "../components/tools/uuid/components/options/generateUUIDVersionOption/context";
import {
    historyContext,
    type HistoryContextFields
} from "../components/tools/utilityOptions/toolHistoryComponent/context";

export type ContextCollections = {
    abbreviation: Context<AbbreviationToolConf>,
    uuidGenerator: Context<UUIDGeneratorToolConf>,
    uuidBoxContext: Context<UUIDBoxContext>,
    historyContext: Context<HistoryContextFields>
};

const contextCollection: ContextCollections = {
    abbreviation: abbreviationToolContext,
    uuidGenerator: UUIDGeneratorToolContext,
    uuidBoxContext: uuidBoxContext,
    historyContext: historyContext
};

export function useCurrentContext<T extends keyof ContextCollections>(
    key: T
): React.ContextType<ContextCollections[T]> {
    return (
        useContext<React.ContextType<ContextCollections[T]>>(
            contextCollection[key] as unknown as Context<React.ContextType<ContextCollections[T]>>
        )
    )
}