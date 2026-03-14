import {useState} from "react";
import type {ToolButtonType} from "../../../../../types";
import {useCurrentContext} from "../../../../../hooks";
import {constantOptions} from "../constants";
import type {ConstantOptions} from "../types";
import {type RootState, selectFilterHistory} from "../../../../../redux";
import {useSelector} from "react-redux";

export const useGetHistory = (contextKey: ToolButtonType) => {
    const [isAllHistory, setIsAllHistory] = useState<boolean>(false)
    const { toolName, selected } = useCurrentContext(contextKey);
    const isConstantOption = constantOptions.includes(selected as ConstantOptions);
    const isValidToolForCurrentHistory = !isConstantOption && selected && selected !== toolName;

    const histories = useSelector((state: RootState) =>
        selectFilterHistory(state, toolName, isAllHistory, selected ?? toolName)
    );

    const handleHistory = () => setIsAllHistory(prev => !prev);

    return { histories, isAllHistory,  handleHistory, isValidToolForCurrentHistory, selected, isConstantOption}
}