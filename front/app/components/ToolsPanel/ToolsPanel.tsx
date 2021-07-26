import React from "react"
import styled from 'styled-components'
import ToolButton from './ToolButton'

const ToolsPanel = (props) =>{
  return (
      <Palette>
        <ToolButton></ToolButton>
        <ToolButton></ToolButton>
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
