import React from "react"
import {useState} from 'react'
import styled from 'styled-components'

const CanvasPanel = (props) =>{
  const [pointerX,setPointerX] = useState(0)
  const [pointerY,setPointerY] = useState(0)
  const [canvaxClickFlag,setCanvaxClickFlag] = useState(0)

  const canvasRef = React.useRef(HTMLCanvasElement | null)
  const [context, setContext] = React.useState(CanvasRenderingContext2D | null)

  const mouseCheck = (evt) =>{
    setPointerX(evt.nativeEvent.offsetX)
    setPointerY(evt.nativeEvent.offsetY)

  }
  const mouseMove = (evt) =>{
    mouseCheck(evt)
    if(canvaxClickFlag){
      drawing(pointerX,pointerY,props.weight)
    }
  }
  const mouseDown = () =>{
    setCanvaxClickFlag(1)
    drawStart()
  }
  const mouseUp = () =>{
    setCanvaxClickFlag(0)
    drawEnd()
  }


  const touchCheck = (evt) =>{
    setPointerX(evt.touches[0].clientX-evt.touches [0] .target.offsetLeft)
    setPointerY(evt.touches[0].clientY-evt.touches [0] .target.offsetTop)
  }
  const touchMove = (evt) =>{
    touchCheck(evt)
    drawing(pointerX,pointerY,props.weight)
  }

  const touchStart = (evt) =>{
    setPointerX(evt.touches[0].clientX-evt.touches [0] .target.offsetLeft)
    setPointerY(evt.touches[0].clientY-evt.touches [0] .target.offsetTop)
    drawStart()
  }
  const touchEnd = () =>{
    drawEnd()
  }


  const drawStart = () =>{
    canvasRef.current.getContext('2d').beginPath()
  }
  const drawing = (x,y,w) =>{
    canvasRef.current.getContext('2d').lineTo(x,y)
    canvasRef.current.getContext('2d').stroke()
  }
  const drawEnd = () =>{
    canvasRef.current.getContext('2d').beginPath()
  }


  return (
    <div onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
      <Palette>
        <PositionView>{pointerX},{pointerY},{props.color}</PositionView>
        <Canvas ref={canvasRef} width="360" height="300"></Canvas>
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
  border:solid;
`

export default CanvasPanel
