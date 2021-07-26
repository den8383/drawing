import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import ColorButton from './ColorButton/ColorButton'
import SelectedColor from './SelectedColor'

const PalettePanel = () =>{
  const [color,setColor] = useState("black")

  const Palette = styled.div`
    width: 100%;
    aspect-ratio: 8 / 3;
    border:solid;
    border-color:aqua;
  `

  const colorButtonClick = (color) =>{
    setColor(color)
  }
  return (
      <div>
        <Palette>
          <ColorButton onClick={colorButtonClick} color='red'></ColorButton>
          <ColorButton onClick={colorButtonClick} color='blue'></ColorButton>
          <ColorButton onClick={colorButtonClick} color='black'></ColorButton>
          <SelectedColor color={color}></SelectedColor>
        </Palette>
      </div>
      )
}


export default PalettePanel
