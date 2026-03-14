/**
 *
 * Component ConstantOptions is a universal JSX element for constants as NIL and MAX
 */
import {useCurrentContext} from "../../../../../../hooks";
import {UUIDOptionsCollection} from "../../../types";
import {checkUUID} from "../../../../../../utils";
import {H1} from "../../../../../../ui";
import {Copyable} from "../../../../../../hoc";
import {UUIDInfoBox} from "../../utilityComponents";

export const ConstantOptions = () => {
    const { selected } = useCurrentContext("uuidGenerator");
    const VALUE = UUIDOptionsCollection[selected] as typeof selected

    const title = selected?.toLowerCase()

    const { isValid, version } = checkUUID(VALUE);

    return (
        <div className={`uuid-${title}-value`} style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <H1 className={"uuid-max-value__title"}>UUID { selected } value</H1>

            <Copyable className={`uuid-${title}-value__value`}>
                <span>{ VALUE }</span>
            </Copyable>

            <UUIDInfoBox
                uuidVersion={version}
                isValid={isValid}
                currentUUID={VALUE}
            />
        </div>
    )
}