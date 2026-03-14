import {createToolContext, type ToolContextGeneralFields} from "../../../../utils";

export type AbbreviationToolConf = ToolContextGeneralFields & {
    word: string;
    showWord: string,
    updateWord: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    checkSelect: (e: React.SyntheticEvent<HTMLInputElement, Event>) => void
}

export const abbreviationToolContext =  createToolContext<AbbreviationToolConf>();