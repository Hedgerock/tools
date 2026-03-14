import "./UUIDInfoBox.css";
import {useUUIDBoxContent} from "../../options/generateUUIDVersionOption/hooks";
import {type FC, memo} from "react";
import {UUIDBoxProvider} from "../../options/generateUUIDVersionOption/context";

export const UUIDInfoBox: FC<{ uuidVersion: number, isValid: boolean, currentUUID: string }> =
    memo(({ uuidVersion, isValid, currentUUID }) => {
    const { style, isValidResponse, uuidCurrentVersion } = useUUIDBoxContent(uuidVersion, isValid);

    return (
        <UUIDBoxProvider value={{ uuidVersion, isValid, currentUUID }}>
            <div className= {"uuid-content-info-box"}>

                <div className={"uuid-content-info-box-element"}>
                <span
                    className={"uuid-content-info-box-element__title"}
                >
                    UUID version:
                </span>
                    <span
                        className={"uuid-content-info-box-element__value"}
                    >
                    {uuidCurrentVersion}
                </span>
                </div>

                <div className={"uuid-content-info-box-element"}>
                    <span>UUID is valid:</span>
                    <span
                        className={"uuid-content-info-box-element__value"}
                        style={style}
                    >
                    { isValidResponse }
                </span>
                </div>
            </div>
        </UUIDBoxProvider>
    )
})