import Link from 'next/link'
import {useState} from 'react'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'
import ToolsPanel from '../../components/ToolsPanel'

export const Drawing = () =>{
  const [color,setColor] = useState("black")
  const [toolName,setToolName] = useState("pencil")
  const [pointerX,setPointerX] = useState(0)
  const [pointerY,setPointerY] = useState(0)

  const colorButtonClick = (color) =>{
    setColor(color)
  }
  const toolButtonClick = (toolName) =>{
    setToolName(toolName)
  }
  const mouseCheck = (evt) =>{
    setPointerX(evt.clientX)
    setPointerY(evt.clientY)
  }
  const touchCheck = (evt) =>{
    setPointerX(evt.touches[0].clientX)
    setPointerY(evt.touches[0].clientY)
  }
  

  return (
    <div onMouseMove={mouseCheck} onTouchMove={touchCheck}>
      <span>{color},</span>
      <span>{toolName}</span>
      <CanvasPanel x={pointerX} y={pointerY}></CanvasPanel>
      <PalettePanel colorButtonClick={colorButtonClick} color={color}></PalettePanel>
      <ToolsPanel toolButtonClick={toolButtonClick}></ToolsPanel>
      <p>drawing</p>
      <Link href='/'>root</Link>
    </div>
  )
}


export default Drawing
