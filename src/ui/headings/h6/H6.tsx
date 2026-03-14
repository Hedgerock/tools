import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H6: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h6
            className={className}
        >
            { children }
        </h6>
    )
}