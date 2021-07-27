import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import ColorButton from './ColorButton/ColorButton'
import SelectedColor from './SelectedColor'

const PalettePanel = (props) =>{

  const Palette = styled.div`
    width: 100%;
    aspect-ratio: 8 / 3;
    border:solid;
    border-color:aqua;
  `

  const colorButtonClick = (color) =>{
    props.colorButtonClick(color)
  }
  return (
      <div>
        <Palette>
          <ColorButton onClick={colorButtonClick} color='red'></ColorButton>
          <ColorButton onClick={colorButtonClick} color='blue'></ColorButton>
          <ColorButton onClick={colorButtonClick} color='black'></ColorButton>
          <SelectedColor color={props.color}></SelectedColor>
        </Palette>
      </div>
      )
}


export default PalettePanel
