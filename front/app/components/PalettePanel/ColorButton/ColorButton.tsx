import React from "react"
import styled from 'styled-components'

const ColorButton = (props) =>{
  return (
    <div>
      <Button color={props.color}>Button</Button>
    </div>
  )
}

const Button = styled.button.attrs(props => ({
  color:props.color
}))`
  color:${props => props.color}
`

export default ColorButton
