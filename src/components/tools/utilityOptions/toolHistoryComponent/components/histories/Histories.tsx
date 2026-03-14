import {HistoryListItem} from "../historyList/historyListItem";
import {useCurrentContext} from "../../../../../../hooks";
import {useSelector} from "react-redux";
import {type RootState, selectFilterHistory} from "../../../../../../redux";

export const Histories = () => {
    const { contextKey, isAllHistory, isConstantOption } = useCurrentContext("historyContext");
    const { selected, toolName } = useCurrentContext(contextKey)

    const histories = useSelector((state: RootState) =>
        selectFilterHistory(state, toolName, isAllHistory, selected ?? toolName)
    );

    return (
        <ul className={`history-list ${ isConstantOption ? "history-list_constant" : "" }`}>
            { histories.map((history, index) => {
                return (
                    <HistoryListItem
                        history={history}
                        index={index}
                        key={history.id}
                    />
                )
            }) }
        </ul>
    )
}