import type {UUIDOptionFields} from "../../../uuid/types";

export type ConstantOptions = Extract<UUIDOptionFields, "MAX" | "NIL" | "validate" | "version">;