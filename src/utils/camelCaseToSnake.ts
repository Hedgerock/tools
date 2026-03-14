export const camelCaseToSnake = (text: string) => {

    return text.split("").map(char => {
        const isUpperCase = char === char.toUpperCase();

        return isUpperCase ? `-${char.toLowerCase()}` : char
    }).join("")
}