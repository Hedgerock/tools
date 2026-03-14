import {
    MAX,
    NIL,
    v1,
    v4,
    v6,
    v7,
    validate,
    type Version1Options,
    type Version4Options,
    type Version6Options,
    type Version7Options
} from "uuid";

import type {JSX} from "react";
import {createConstantUUIDOption, createOptionConfig, createUUIDVersionOption} from "../../../utilityComponents";
import {ValidateUUIDOption} from "../components/options";

type UUIDVersion<T> = (options?: T, buf?: undefined, offset?: number) => string;

export type UUIDOptionsMap = {
    NIL: string;
    MAX: string;
    v1: UUIDVersion<Version1Options>;
    v4: UUIDVersion<Version4Options>;
    v6: UUIDVersion<Version6Options>;
    v7: UUIDVersion<Version7Options>;
    validate: (uuid:boolean) => boolean;
}

export type UUIDOptionFields = keyof UUIDOptionsMap

export type OptionState = "info" | "main" | "history";
export type UUIDOptionRenderComponent = Record<UUIDOptionFields, Record<OptionState, () => JSX.Element>>;
export type UUIDSVersion = Extract<UUIDOptionFields, "v1" | "v4"  | "v6" | "v7">

export const UUIDOptionComponents: UUIDOptionRenderComponent = {
    NIL: createConstantUUIDOption(),
    MAX: createConstantUUIDOption(),
    v1: createUUIDVersionOption(),
    v4: createUUIDVersionOption(),
    v6: createUUIDVersionOption(),
    v7: createUUIDVersionOption(),
    validate: createOptionConfig(ValidateUUIDOption),
}

export const UUIDOptionsCollection: UUIDOptionsMap = {
    NIL,
    MAX,
    v1,
    v4,
    v6,
    v7,
    validate,
}

export const UUIDOptionsSelectCollection =
    Object.keys(UUIDOptionsCollection).map(el => [el[0].toUpperCase() + el.slice(1).toLowerCase(), el])