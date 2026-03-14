import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H2: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h2
            className={className}
        >
            { children }
        </h2>
    )
}