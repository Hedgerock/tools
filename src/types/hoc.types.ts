import type {Context, ReactNode} from "react";

export type ContextType<T> = {
    Context: Context<T>,
    value: T
}

export type HocProps<T> = {
    context: ContextType<T>,
    children: React.ReactNode;
}

/**
 * Copiable types
 */
export type CopiableProps<T extends React.ElementType> = {
    as?: T;
    children: ReactNode;
    isCopiable?: boolean
} & React.ComponentPropsWithoutRef<T>

export type AltTag = Extract<React.ElementType, "div">