import {type FC} from "react";
import "./ToolHistoryComponent.css";
import {HistoryList} from "./components";
import type {ToolButtonType} from "../../../../types";
import {historyContext} from "./context";
import {generateContext} from "../../../../utils";
import {useGetHistory} from "./hooks";

export const ToolHistoryComponent: FC<{ contextKey: ToolButtonType }> = ({ contextKey }) => {
    const { histories, isAllHistory,  handleHistory, isValidToolForCurrentHistory, selected, isConstantOption} = useGetHistory(contextKey);

    const {Context, value} = generateContext(historyContext, { isAllHistory, contextKey, histories, isConstantOption })
    const HistoryProvider = Context.Provider;

    return (
       <HistoryProvider value={value}>
           <div className={"history-tools-box"}>
               { isValidToolForCurrentHistory &&
                   <label style={{ display: "inline-flex", alignItems: "center", gap: ".3rem" }}>
                       <span style={{ userSelect: "none" }}>
                           Show only {selected}
                       </span>

                       <input
                           type={"checkbox"}
                           checked={isAllHistory}
                           onChange={handleHistory}
                       />
                   </label>
               }
           </div>

           <HistoryList />
       </HistoryProvider>

    )
}