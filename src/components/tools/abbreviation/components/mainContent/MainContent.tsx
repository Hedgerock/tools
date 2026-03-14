import {useWordContent} from "../../hooks";
import {AbbreviateContent} from "./abbreviateContent";

export const MainContent = () => {
    const {word, showWord, updateWord, checkKeyDown, checkSelect, saveCurrentAbbreviation, isPresent} = useWordContent();
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            { word.length > 0 &&
                <AbbreviateContent
                    word={word}
                    isPresent={isPresent}
                    showWord={showWord}
                    saveCurrentAbbreviation={saveCurrentAbbreviation}
                />
            }

            <input
                style={{
                    width: "100%",
                    height: "2.5rem",
                    padding: "0 .5rem",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    border: `2px solid white`
                }}
                type="text"
                placeholder="insert your word for abbreviation"
                onChange={updateWord}
                onKeyDown={checkKeyDown}
                onSelect={checkSelect}
                value={word}
            />
        </div>
    )
}
