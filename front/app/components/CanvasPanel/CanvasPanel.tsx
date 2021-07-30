import React, {useEffect} from "react"
import {useState} from 'react'
import styled from 'styled-components'

const CanvasPanel = (props) =>{
  const [pointerX,setPointerX] = useState(0)
  const [pointerY,setPointerY] = useState(0)
  const [canvaxClickFlag,setCanvaxClickFlag] = useState(0)

  const canvasRef = React.useRef(HTMLCanvasElement | null)
  const paletteRef = React.useRef(HTMLDivElement)
  useEffect(() => {
    canvasRef.current.width = paletteRef.current.clientWidth
    canvasRef.current.height = paletteRef.current.clientWidth *3/4
  },[])
  window.addEventListener( 'resize', function() {
    canvasRef.current.width = paletteRef.current.clientWidth
    canvasRef.current.height = paletteRef.current.clientWidth *3/4
  }, false )

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
  const clear = () =>{
    canvasRef.current.getContext('2d').clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
  }


  return (
      <Palette ref={paletteRef} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
        <PositionView>{pointerX},{pointerY},{props.color},{paletteRef.current.offsetWidth},{paletteRef.current.offsetHeight}</PositionView>
        <Canvas ref={canvasRef}></Canvas>
        <ClearButton onClick={clear}>aaaa</ClearButton>
      </Palette>
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
const ClearButton = styled.button`
`

export default CanvasPanel
