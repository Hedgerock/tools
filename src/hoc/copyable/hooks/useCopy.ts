import {useCallback, useRef, useState} from "react";

const TIME_TO_LIVE = 2000;

export const useCopy = (isCopiable: boolean) => {
    const textContent = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = useCallback(async () => {
        if (!textContent.current || copied || !isCopiable) {
            return
        }

        try {
            await navigator.clipboard.writeText(textContent.current.innerText);
            setCopied(true)

            setTimeout(() => {

                setCopied(false)

            }, TIME_TO_LIVE)
        } catch (e) {
            console.error("Failed to copy", e);
        }

    }, [copied, isCopiable])

    return { handleCopy, textContent, copied }
}