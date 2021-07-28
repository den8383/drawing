import React from "react"
import {useState} from 'react'
import styled from 'styled-components'

const CanvasPanel = (props) =>{
  const [pointerX,setPointerX] = useState(0)
  const [pointerY,setPointerY] = useState(0)
  const [canvasX,setCanvasX] = useState(0)
  const [canvasY,setCanvasY] = useState(0)
  const [canvaxClickFlag,setCanvaxClickFlag] = useState(0)
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
      <Palette>
        <PositionView>{canvasX},{canvasY},{props.color}</PositionView>
        <Canvas></Canvas>
      </Palette>
    </div>
  )
}

const Palette = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border:solid;
  border-color:aqua;
  touch-action: none;
`

const PositionView = styled.p`
  color:red;
  position:absolute;
  z-index:2;
`
const Canvas = styled.canvas`
  width:100%;
  height:100%;
  border:solid;
`

export default CanvasPanel
