import React from "react"
import styled from 'styled-components'
import ToolButton from './ToolButton'
import pencil from '../../public/pencil.png'
import eraser from '../../public/eraser.png'

const ToolsPanel = (props) =>{

  const toolButtonClick = (toolName) =>{
    props.toolButtonClick(toolName)
  }

  return (
      <Palette>
        <ToolButton onClick={toolButtonClick} tool={pencil} toolName='pencil'></ToolButton>
        <ToolButton onClick={toolButtonClick} tool={eraser} toolName='eraser'></ToolButton>
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
