import type {UUIDOptionFields} from "../components/tools/uuid/types";

export type ToolInfoElements = UUIDOptionFields | "abbreviation"

const ABBREVIATION_TEXT = "Abbreviation is a utility that converts a word into its shortened form by replacing the " +
    "middle letters with a number representing the count of omitted characters. The abbreviation keeps the first and " +
    "last letters of the word and inserts a number in between indicating how many letters were removed.\n" +
    "\n" +
    "For example, the word “Kubernetes” becomes “k8s”, meaning there are 8 letters between k and s. This format is " +
    "commonly used in technical and developer contexts to create concise, readable abbreviations."


const MAX_TEXT = "MAX is a utility that returns a special UUID value representing the maximum placeholder state. " +
    "It generates a UUID v0, where all bits of the identifier are set to zero. As a result, the returned " +
    "UUID value consists entirely of zeros and is typically used as a default, empty, or sentinel identifier in systems " +
    "where a " +
    "UUID is required but no actual value is assigned."

const NIL_TEXT = "NIL is a utility that returns a special UUID value representing a null or terminal identifier. " +
    "It generates a UUID v15, where all bits of the identifier are set to their maximum value. As a result, the returned " +
    "UUID consists entirely of f characters (ffffffff-ffff-ffff-ffff-ffffffffffff). This value can be used as a sentinel " +
    "or boundary marker in systems that require a UUID but need to represent a special “all-max” state."


const UUID_VERSION_TEMPLATE = "v1 / v4 / v6 / v7 are utilities that generate UUIDs using different " +
    "UUID specification versions. Each tool produces a unique identifier following the structure and rules defined " +
    "for its specific version.\n" +
    "\n" +
    "The generated UUID is returned in the standard canonical format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). " +
    "The difference between these tools lies in the underlying generation strategy defined by the UUID version (such as " +
    "time-based " +
    "or random generation), allowing developers to choose the most appropriate identifier type for their use case."

const VALIDATE_TEXT = "Validate is a utility that checks whether a given string is a valid UUID. The tool " +
    "verifies that the input follows the standard UUID format and structure.\n" +
    "\n" +
    "If the value is valid, the utility also identifies and returns the UUID version (for example, v1, v4, v6, or v7). " +
    "This helps developers confirm both the correctness of the identifier and the generation method used. " +
    "If the string does not match the UUID specification, the validation fails and the value is reported as invalid."

export const toolInfoCollection: Record<ToolInfoElements, string> = {
    abbreviation: ABBREVIATION_TEXT,
    MAX: MAX_TEXT,
    NIL: NIL_TEXT,
    v1: UUID_VERSION_TEMPLATE,
    v4: UUID_VERSION_TEMPLATE,
    v6: UUID_VERSION_TEMPLATE,
    validate: VALIDATE_TEXT,
    v7: UUID_VERSION_TEMPLATE,
}