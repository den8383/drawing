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
  const [canvasX,setCanvasX] = useState(0)
  const [canvasY,setCanvasY] = useState(0)
  const [canvaxClickFlag,setCanvaxClickFlag] = useState(0)

  const colorButtonClick = (color) =>{
    setColor(color)
  }
  const toolButtonClick = (toolName) =>{
    setToolName(toolName)
  }
  const mouseCheck = (evt) =>{
    setPointerX(evt.nativeEvent.offsetX)
    setPointerY(evt.nativeEvent.offsetY)
    if(canvaxClickFlag){
      setCanvasX(pointerX)
      setCanvasY(pointerY)
    }
  }
  const touchCheck = (evt) =>{
    setPointerX(evt.touches[0].clientX-evt.touches [0] .target.offsetLeft)
    setPointerY(evt.touches[0].clientY-evt.touches [0] .target.offsetTop)
    setCanvasX(pointerX)
    setCanvasY(pointerY)
  }
  const mouseDown = () =>{
    setCanvaxClickFlag(1)
  }
  const mouseUp = () =>{
    setCanvaxClickFlag(0)
  }

  return (
    <div onMouseMove={mouseCheck} onTouchMove={touchCheck} onMouseDown={mouseDown} onMouseUp={mouseUp}>
      <CanvasPanel x={canvasX} y={canvasY}></CanvasPanel>
      <PalettePanel colorButtonClick={colorButtonClick} color={color}></PalettePanel>
      <ToolsPanel toolButtonClick={toolButtonClick}></ToolsPanel>
      <span>{color},</span>
      <span>{toolName}</span>
      <p>drawing</p>
      <Link href='/'>root</Link>
    </div>
  )
}


export default Drawing
