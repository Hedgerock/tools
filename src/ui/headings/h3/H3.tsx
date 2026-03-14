import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H3: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h3
            className={className}
        >
            { children }
        </h3>
    )
}