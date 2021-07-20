import React from 'react'
import styled from 'styled-components'
import ColorButton from './ColorButton/ColorButton'

const PalettePanel = () =>{
  return (
      <div>
        <Palette>
          <ColorButton color='red'></ColorButton>
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

export default PalettePanel
