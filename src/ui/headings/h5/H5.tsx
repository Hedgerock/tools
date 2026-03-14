import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H5: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h5
            className={className}
        >
            { children }
        </h5>
    )
}