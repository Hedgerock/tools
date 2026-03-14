export const useUUIDBoxContent = (uuidVersion: number, isValid: boolean) => {

    const style: React.CSSProperties = {
        background: `${ isValid ? "#008000" : "#f44336" }`
    }

    const isValidResponse = isValid ? "Yes" : "No";
    const uuidCurrentVersion = uuidVersion === -1 ? "X" : `v${uuidVersion}`;

    return { style, isValidResponse, uuidCurrentVersion }
}