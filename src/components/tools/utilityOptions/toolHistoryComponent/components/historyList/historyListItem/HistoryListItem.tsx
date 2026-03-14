import {type FC, memo} from "react";
import type {CurrentButtonHistory} from "../../../../../../../constants";
import {getTime} from "../../../../../../../utils";
import {Copyable} from "../../../../../../../hoc";

export const HistoryListItem: FC<{ history: CurrentButtonHistory; index: number; }> = memo(({ history, index }) => {
    const { time, diff } = getTime(history.timestamp);

    const timeValue =
        `${diff === 0 ? "< minute" : `${diff} ${time}${diff > 1 ? "s" : ""}`} ago`

    return (
        <li className={"history-list-item"}>

            <div className={"history-info-box"}>

                <div className={"history-info-box-header"}>
                    <div
                        className={"history-info-box-header__vale"}
                        style={{ display: "flex", alignItems: "center", gap: ".2rem"}}>
                        <span>{index + 1}.</span>
                        <span>{ history.operation }</span>
                    </div>

                    <span>{ timeValue }</span>
                </div>

                <Copyable className={"history-info-box__value"}>
                    <span>{ history.value }</span>
                </Copyable>
            </div>

        </li>
    )
})