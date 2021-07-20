import React from "react"
import styled from "styled-components"

const SelectedColor = (props) =>{
  return(
    <ColorPanel color={props.color}></ColorPanel>
  )
}

const ColorPanel = styled.div.attrs(props => ({
}))`
  background:${props => props.color};
  width:5em;
  height:5em;
`

export default SelectedColor
