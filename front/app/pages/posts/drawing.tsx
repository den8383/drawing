import Link from 'next/link'
import {useState} from 'react'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'
import ToolsPanel from '../../components/ToolsPanel'

export const Drawing = () =>{
  const [color,setColor] = useState("black")

  const colorButtonClick = (color) =>{
    setColor(color)
  }

  return (
    <div>
      <CanvasPanel x='0' y='0'></CanvasPanel>
      <PalettePanel colorButtonClick={colorButtonClick} color={color}></PalettePanel>
      <ToolsPanel></ToolsPanel>
      <p>drawing</p>
      <Link href='/'>root</Link>
    </div>
  )
}


export default Drawing
