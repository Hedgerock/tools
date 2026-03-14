import type {JSX} from "react";
import * as React from "react";
import type {UUIDOptionsMap} from "../types";
import {createToolContext, type ToolContextGeneralFields} from "../../../../utils";

export type UUIDGeneratorToolConf = ToolContextGeneralFields<UUIDOptionsMap> & {
    SelectedOptionComponent: () => JSX.Element,
    handleSelection: (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => void;
}
export const UUIDGeneratorToolContext = createToolContext<UUIDGeneratorToolConf>();