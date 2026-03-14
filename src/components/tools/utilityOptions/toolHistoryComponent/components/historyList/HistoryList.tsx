import {useCurrentContext} from "../../../../../../hooks";
import {NotFoundHistory} from "../notFoundHistory/NotFoundHistory.tsx";
import {Histories} from "../histories/Histories.tsx";

export const HistoryList = () => {
    const {histories} = useCurrentContext("historyContext");

    return histories.length > 0
        ? <Histories />
        : <NotFoundHistory />
}
