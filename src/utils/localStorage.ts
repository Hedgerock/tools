export const getLocalStorage = <T, >(key: string, altStorage: T): T => {
    const item = localStorage.getItem(key);

    return item
        ? JSON.parse(item)
        : altStorage
}

export const saveLocalStorage = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}