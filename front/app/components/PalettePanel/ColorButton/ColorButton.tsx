import React from "react"
import styled from 'styled-components'

const ColorButton = (props) =>{
  return (
    <div>
      <Button color={props.color}></Button>
    </div>
  )
}

const Button = styled.button.attrs(props => ({
  color:props.color
}))`
  background:${props => props.color};
  height:2em;
  width:2em;
  border-radius:50%;
`

export default ColorButton
