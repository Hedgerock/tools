import {useCallback, useRef, useState} from "react";
import * as React from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../redux";

const SPLITERATOR = " -> ";

export const useAbbreviation = () => {
    const firstElement = useSelector((state: RootState) =>
        state.toolButtonsHistory.value.abbreviation.content[0]
    )

    const [word, setWord] = useState<string>(firstElement?.operation?.split(SPLITERATOR)[0] ?? "")
    const [showWord, setShowWord] = useState<string>(firstElement?.value ?? word);
    const countSelectedWord = useRef<number>(0);

    const updateWord = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replaceAll(" ", "");

        const isValid = /^[a-zа-яіїє]+$/i.test(value)

        if (isValid) {

            if (value.length >= 10) {
                const firstWord = value[0];
                const lastWord = value[value.length - 1];
                const totalLength = value.length - 2;

                setShowWord((firstWord + totalLength + lastWord).toLowerCase())
            } else {
                setShowWord(value)
            }

            setWord(value)
        }
    }, [])

    const checkKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.currentTarget

        if (e.key === "Backspace") {
            const length = target.value.length
            const selectedLength = countSelectedWord.current;

            if (length <= 1 || selectedLength === length) {
                setWord("")
            }
        }
    }, [])

    const checkSelect = useCallback((e: React.SyntheticEvent<HTMLInputElement, Event>) => {
        const input = e.target as HTMLInputElement;

        const start = input.selectionStart ?? 0;
        const end = input.selectionEnd ?? 0;

        const selectedText = input.value.slice(start, end);
        countSelectedWord.current = selectedText.length
    }, [])

    return { word, showWord, updateWord, checkKeyDown, checkSelect }
}