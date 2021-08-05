import Link from 'next/link'
import React, {useEffect} from "react"
import {useState} from 'react'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'
import ToolsPanel from '../../components/ToolsPanel'

export const Drawing = () =>{
  const [color,setColor] = useState("black")
  const [weight,setWeight] = useState(4)
  const [toolName,setToolName] = useState("pencil")

  const [png,setPng] = useState(null)
  const imageDownloadLink = React.useRef(HTMLAnchorElement)

  const colorButtonClick = (color) =>{
    setColor(color)
  }
  const toolButtonClick = (toolName) =>{
    setToolName(toolName)
  }
  const saveButtonClick = (png) =>{
    setPng(png)
  }
  const downloadImg = () =>{
    alert("a")
    imageDownloadLink.href = png
  }

  return (
    <div>
      <CanvasPanel color={color} weight={weight} toolName={toolName} saveButtonClick={saveButtonClick}></CanvasPanel>
      <PalettePanel colorButtonClick={colorButtonClick} color={color}></PalettePanel>
      <ToolsPanel toolButtonClick={toolButtonClick}></ToolsPanel>
      <span>{color},</span>
      <span>{toolName}</span>
      <p>drawing</p>
      {png != null &&
          <p><a href={png} download="canvas.png">download</a></p>
      }
      <Link href='/'>root</Link>
    </div>
  )
}


export default Drawing
