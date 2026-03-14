import type {ToolButtonTypeProp} from "../../../constants";
import {type FC, memo} from "react";
import {useAbbreviation, useHistoryAndInfo} from "../../../hooks";
import {createOptionConfig} from "../../utilityComponents";
import {MainContent} from "./components/mainContent";
import {type AbbreviationToolConf, abbreviationToolContext} from "./context";
import {generateContext} from "../../../utils";
import {Tool, ToolButtonHeader} from "../../../hoc";

import "./AbbreviationTool.css";

export const AbbreviationTool: FC<ToolButtonTypeProp> = memo(
    ({ buttonType: toolName }) => {
        const {word, showWord, updateWord, checkKeyDown, checkSelect} = useAbbreviation();
        const { showInfo, showHistory, toolState } = useHistoryAndInfo();
        const ContentComponent = createOptionConfig(MainContent, "abbreviation")[toolState];

        const ctx =
            generateContext<AbbreviationToolConf>(
                abbreviationToolContext,
                {
                    toolState, word, toolName: toolName, title: "Words abbreviations",
                    showInfo, showHistory, showWord, updateWord, checkKeyDown, checkSelect,
                    selected: toolName
                }
            )

        return (
            <Tool context={ctx} >
                <ToolButtonHeader contextKey={"abbreviation"}>
                    Abbreviate your word
                </ToolButtonHeader>

                <ContentComponent />
            </Tool>
        )
    }
)