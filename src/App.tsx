import {useSelector} from "react-redux";
import type {RootState} from "./redux";
import {AbbreviationTool, UUIDGeneratorTool} from "./components/tools";
import type {ToolButtonTypeProp} from "./constants";
import type {FC} from "react";
import type {ToolButtonType} from "./types";
import {ToolIcons} from "./components/toolIcons";

import './App.css'

const toolMap: Record<ToolButtonType, FC<ToolButtonTypeProp>> = {
    abbreviation: AbbreviationTool,
    uuidGenerator: UUIDGeneratorTool
}

function App() {
  const tools = useSelector((state: RootState) => state.toolButtons);
  const toolsCollection = Object.values(tools.value);
  const filteredToolsCollection = toolsCollection.filter(tool => tool.isOpen)

  console.log(toolsCollection);

  return (
    <div className={"application-skeleton"}>
        <div className={"application-skeleton-main"}>
            { filteredToolsCollection.map(tool => {
                const CurrentTool = toolMap[tool.buttonType];
                return <CurrentTool buttonType={tool.buttonType} key={tool.id}/>
            })}
        </div>

        <div className={"tools-icons"}>
            { toolsCollection.map(tool => {
                const { id } = tool;
                return <ToolIcons tool={tool} key={id}/>
            })}
        </div>
    </div>
  )
}

export default App
