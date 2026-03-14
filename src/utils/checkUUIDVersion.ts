import {validate, version} from "uuid";

export const checkUUID = (currentUUID: string): { isValid: boolean, version: number } => {
    const isValid = validate(currentUUID);

    if (!isValid) {
        return { isValid, version: -1 }
    }

    return { isValid, version: version(currentUUID) }
}