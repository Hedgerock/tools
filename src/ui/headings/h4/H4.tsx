import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H4: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h4
            className={className}
        >
            { children }
        </h4>
    )
}