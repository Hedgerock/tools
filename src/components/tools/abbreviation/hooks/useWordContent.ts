import {useCurrentContext} from "../../../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {addHistory, incrementId, type NewHistoryProps, type RootState} from "../../../../redux";
import {useCallback, useMemo} from "react";

export const useWordContent = () => {

    const {word, showWord, updateWord, checkKeyDown, checkSelect} = useCurrentContext("abbreviation");

    const dispatch = useDispatch();

    const historyState = useSelector((state: RootState) => state.toolButtonsHistory);
    const id= historyState.currentId;

    const historiesSet = useMemo(() => {
        return new Set(historyState.value.abbreviation.content.map(el => el.value));
    }, [historyState.value.abbreviation.content])

    const isPresent = showWord.length < 10 && historiesSet.has(showWord);

    const saveCurrentAbbreviation = useCallback(() => {
        if (isPresent) return

        const content: NewHistoryProps = {
            id: "abbreviation",
            content: {
                id,
                timestamp: Date.now(),
                value: showWord,
                operation: `${word} -> ${showWord}`
            }
        }

        dispatch(addHistory(content))
        dispatch(incrementId())
    }, [dispatch, id, isPresent, showWord, word])
    
    return { word, showWord, updateWord, checkKeyDown, checkSelect, saveCurrentAbbreviation, isPresent }
}