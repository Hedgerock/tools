import type {ToolContextGeneralFields} from "../../utils";
import type {HocProps} from "../../types";
import type {RootState} from "../../redux";
import {useSelector} from "react-redux";
import {H1} from "../../ui";
import {ButtonsBox} from "./components/buttonsBox/ButtonsBox.tsx";

import "./Tool.css";

export const Tool=
    <T extends ToolContextGeneralFields,>({ children, context }: HocProps<T>) => {
    const ToolProvider = context.Context.Provider;
    const { toolName, title } = context.value;

    const {isExpanded, isHidden} = useSelector((state: RootState) => state.toolButtons.value[toolName])
    const toolClassName =
        `tool-skeleton ${isHidden ? "tool-skeleton_hidden" : ""} ${ isExpanded && !isHidden ? "tool-skeleton_expanded" : "" }`;

    return (
        <ToolProvider value={{...context.value}}>
            <div
                className={toolClassName}
            >
                <header className={"tool-skeleton-header"}>
                    <H1 className={"tool-skeleton-header__title"}>
                        { title }
                    </H1>

                    <ButtonsBox contextKey={toolName} />
                </header>

                <main className={"tool-skeleton-main-content"}>
                    { children }
                </main>

                <footer className={"tool-skeleton-footer"}></footer>
            </div>
        </ToolProvider>
    )
}