import type {FC} from "react";
import type {HeadingProps} from "../../../types";

export const H1: FC<HeadingProps> = ({ children, className }) => {
    return (
        <h1
            className={className}
        >
            { children }
        </h1>
    )
}