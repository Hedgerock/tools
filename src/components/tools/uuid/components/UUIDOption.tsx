import type {FC} from "react";

export const UUIDOption: FC<{ option: string[] }> = ({ option }) => {
    const [updated, old] = option

    return (
        <option
            id={old}
            value={old}
        >
            {updated}
        </option>
    )
}