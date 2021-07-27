import React from "react"
import styled from 'styled-components'
import ToolButton from './ToolButton'
import pencil from '../../public/pencil.png'
import eraser from '../../public/eraser.png'

const ToolsPanel = (props) =>{

  return (
      <Palette>
        <ToolButton tool={pencil}></ToolButton>
        <ToolButton tool={eraser}></ToolButton>
      </Palette>
      )
}

const Palette = styled.div`
  width: 100%;
  aspect-ratio: 8 / 3;
  border:solid;
  border-color:aqua;
`


export default ToolsPanel
