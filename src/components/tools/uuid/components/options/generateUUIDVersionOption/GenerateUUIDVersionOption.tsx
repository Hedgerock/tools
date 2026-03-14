import {memo} from "react";
import {useCurrentContext} from "../../../../../../hooks";
import {useGenerateUUID} from "./hooks";
import type {UUIDSVersion} from "../../../types";
import {Copyable} from "../../../../../../hoc";
import {UUIDInfoBox} from "../../utilityComponents";
import {Button} from "../../../../../../ui";

import "./GenerateUUIDVersionOption.css";

export const GenerateUUIDVersionOption = memo(() => {
    const { selected } = useCurrentContext("uuidGenerator");
    const { uuidVersion, isValid, generateUUID, generate } = useGenerateUUID(selected as UUIDSVersion);

    return (
        <>
            <div className={"uuid-option-info"}>
                <Copyable style={{ margin: "1rem .5rem" }} isCopiable={isValid}>
                    <span>{ generate }</span>
                </Copyable>
            </div>

            <UUIDInfoBox
                uuidVersion={uuidVersion}
                isValid={isValid}
                currentUUID={generate}
            />

            <Button
                buttonType={"generate"}
                className={"uuid-generate-button"}
                title={"Generate uuid"}
                onClickFunc={generateUUID}
            />
        </>
    )
})