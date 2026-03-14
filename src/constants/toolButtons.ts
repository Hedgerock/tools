import type {ToolButtonType} from "../types";

export type ToolButtonConf = {
    id: number;
    isOpen: boolean;
    buttonType: ToolButtonType;
    isHidden: boolean;
    isExpanded: boolean;
    clickFunc?: (id: number) => void;
}

type ExtractedValues = "id" | "buttonType" | "clickFunc";

export const defaultToolSetup: Omit<ToolButtonConf, ExtractedValues> = {
    isOpen: true,
    isExpanded: false,
    isHidden: false
}

export type ToolButtonTypeProp = Pick<ToolButtonConf, "buttonType">

export type ToolButtonStatuses = Omit<ToolButtonConf, ExtractedValues>

export const toolButtons: Record<ToolButtonType, ToolButtonConf> = {
    abbreviation: {...defaultToolSetup, id: 1, buttonType: "abbreviation"},
    uuidGenerator: {...defaultToolSetup, id: 2, buttonType: "uuidGenerator"},
}

export type CurrentButtonHistory = {
    id: number;
    timestamp: number;
    operation: string;
    value: string;
    internalToolId?: unknown
}

export type ToolButtonHistory = {
    content: CurrentButtonHistory[]
}

const generateHistory = ():ToolButtonHistory => ({
    content: [] as CurrentButtonHistory[]
})

export const toolButtonsHistory: Record<ToolButtonType, ToolButtonHistory> = {
    abbreviation: generateHistory(),
    uuidGenerator: generateHistory()
}