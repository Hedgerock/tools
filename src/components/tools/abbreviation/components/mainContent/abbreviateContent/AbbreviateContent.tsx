import {type FC, memo} from "react";
import type {AbbreviateContentType} from "../../../types/index.type.ts";
import {Button} from "../../../../../../ui";
import {Copyable} from "../../../../../../hoc";


export const AbbreviateContent: FC<AbbreviateContentType> = memo((props) => {
    const { word, showWord, isPresent, saveCurrentAbbreviation } = props

    return (
        word.length >= 10
            ? (
                <div>
                    <Button
                        buttonType={"save"}
                        className={"abbreviation-tool__save-btn"}
                        title={isPresent ? `${word} has already saved` : `Save ${word}`}
                        onClickFunc={saveCurrentAbbreviation}
                        disabled = { isPresent }
                    />
                    <Copyable>
                        <h2>{ showWord }</h2>
                    </Copyable>
                </div>
            )
            : (
                <h2>{ word }</h2>
            )
    )
})