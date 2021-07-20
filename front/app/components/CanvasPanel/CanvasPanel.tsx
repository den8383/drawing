import React from "react"
import styled from 'styled-components'

const CanvasPanel = (props) =>{
  return (
      <div>
        <Palette>
          <PositionView>{props.x},{props.y}</PositionView>
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
