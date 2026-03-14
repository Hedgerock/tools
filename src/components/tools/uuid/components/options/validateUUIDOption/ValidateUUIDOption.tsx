import {useState} from "react";
import {versions} from "../../../../../../constants";
import {UUIDOptionsCollection} from "../../../types";
import {checkUUID} from "../../../../../../utils";
import {UUIDInfoBox} from "../../utilityComponents";

const getRandomVersion = () => {
    const index = Math.floor(Math.random() * versions.length)
    return UUIDOptionsCollection[versions[index]]()
}

export const ValidateUUIDOption = () => {
    const [UUID, setUUID] = useState<string>(getRandomVersion())
    const { isValid, version } = checkUUID(UUID);

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "85%", gap: "3rem" }}>
            <input
                style={{
                    width: "100%",
                    height: "2.5rem",
                    padding: "0 .5rem",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    border: `2px solid ${isValid ? "#008000" : "#f44336"}`
                }}
                type={"text"}
                value={UUID}
                placeholder={"Write your UUID"}
                onChange={(e) => setUUID(e.target.value)}
            />

            <UUIDInfoBox
                uuidVersion={version}
                isValid={isValid}
                currentUUID={UUID}
            />
        </div>
    )
}