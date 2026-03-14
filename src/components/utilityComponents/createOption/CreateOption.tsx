import type {ToolButtonType} from "../../../types";
import {ToolHistoryComponent, ToolInfoComponent} from "../../tools";
import {ConstantOptions, GenerateUUIDVersionOption} from "../../tools/uuid/components/options";
import type {JSX} from "react";

type CreateOptionConfigProps = {
    main: () => JSX.Element;
    info: () => JSX.Element;
    history: () => JSX.Element
}

export function createOptionConfig(
    main: () => JSX.Element, contextKey: ToolButtonType = "uuidGenerator"): CreateOptionConfigProps {
    return {
        main,
        info: () => <ToolInfoComponent contextKey={contextKey}/>,
        history: () => <ToolHistoryComponent contextKey={contextKey}/>
    }
}

export function createConstantUUIDOption(): CreateOptionConfigProps {
    return createOptionConfig( () => {
        return <ConstantOptions />
    } )
}

export function createUUIDVersionOption(): CreateOptionConfigProps {
    return createOptionConfig( () => {
        return <GenerateUUIDVersionOption />
    })
}