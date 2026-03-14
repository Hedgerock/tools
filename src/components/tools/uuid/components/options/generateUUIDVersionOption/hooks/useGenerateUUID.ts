import {useDispatch, useSelector} from "react-redux";
import {UUIDOptionsCollection, type UUIDSVersion} from "../../../../types";
import {addHistory, incrementId, type NewHistoryProps, type RootState} from "../../../../../../../redux";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {checkUUID} from "../../../../../../../utils";

const generateCurrentVersion =
    (id: number,  value: string, version: UUIDSVersion):NewHistoryProps  => ({
    id: "uuidGenerator",
    content: {
        id,
        timestamp: Date.now(),
        value,
        operation: `Generate uuid ${ version }`,
        internalToolId: version
    }
})

export const useGenerateUUID = (currentVersion: UUIDSVersion) => {
    const firstElement = useSelector((state: RootState) =>
        state.toolButtonsHistory.value.uuidGenerator.content.filter(tool =>
            tool?.internalToolId === currentVersion)[0]
    )
    
    const currentId = useSelector((state: RootState) => state.toolButtonsHistory.currentId);

    const dispatch = useDispatch();

    const [currentUUID, setCurrentUUID] = useState<string>(firstElement?.value ?? UUIDOptionsCollection[currentVersion]())
    const isIntegrated = useRef(false);
    
    useEffect(() => {
        if (!firstElement && !isIntegrated.current) {
            const value = UUIDOptionsCollection[currentVersion]();
            const payload: NewHistoryProps = generateCurrentVersion(currentId, value, currentVersion);
            dispatch(incrementId());
            dispatch(addHistory(payload))
            
            isIntegrated.current = true
        }
    }, [currentId, currentVersion, dispatch, firstElement])
    
    const { version: uuidVersion, isValid } = useMemo(() => checkUUID(currentUUID), [currentUUID]);

    const generateUUID = useCallback(() => {
        const newValue = UUIDOptionsCollection[currentVersion]();
        setCurrentUUID(newValue);
        const payload: NewHistoryProps = generateCurrentVersion(currentId, newValue, currentVersion)

        dispatch(addHistory(payload))
        dispatch(incrementId());
    }, [currentId, currentVersion, dispatch])

    return { uuidVersion, isValid, generateUUID, generate: currentUUID }
}