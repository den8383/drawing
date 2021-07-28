import Link from 'next/link'
import {useState} from 'react'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'
import ToolsPanel from '../../components/ToolsPanel'

export const Drawing = () =>{
  const [color,setColor] = useState("black")
  const [toolName,setToolName] = useState("pencil")

  const colorButtonClick = (color) =>{
    setColor(color)
  }
  const toolButtonClick = (toolName) =>{
    setToolName(toolName)
  }

  return (
    <div>
      <span>{color},</span>
      <span>{toolName}</span>
      <CanvasPanel x='0' y='0'></CanvasPanel>
      <PalettePanel colorButtonClick={colorButtonClick} color={color}></PalettePanel>
      <ToolsPanel toolButtonClick={toolButtonClick}></ToolsPanel>
      <p>drawing</p>
      <Link href='/'>root</Link>
    </div>
  )
}


export default Drawing
