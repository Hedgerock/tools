import {createCurrentContext} from "../../../../../../../utils";

export type UUIDBoxContext = {
    uuidVersion: number;
    isValid: boolean;
    currentUUID: string
}

export const uuidBoxContext = createCurrentContext<UUIDBoxContext>();
export const UUIDBoxProvider = uuidBoxContext.Provider;