import {useCopy} from "./hooks/useCopy.ts";
import {ALT_TAG_VALUE} from "../../constants";
import type {AltTag, CopiableProps} from "../../types";

import "./Copyable.css";

export const Copyable =
    <T extends React.ElementType = AltTag>({ as, children, isCopiable = true, ...rest }: CopiableProps<T>) => {
    const Component = as || ALT_TAG_VALUE;
    const {handleCopy, textContent, copied} = useCopy(isCopiable)


    return (
        <Component
            {...rest}
            className={"copy-box"}
            style={{...rest.style}}
            onClick={handleCopy}
            title={"Copy"}
        >
            <div
                ref={textContent}
                className={"copy-box__content"}
            >{
                children }
            </div>

            { copied &&
                <div className={"copy-box__copied"}>Copied</div>
            }
        </Component>

    )
}