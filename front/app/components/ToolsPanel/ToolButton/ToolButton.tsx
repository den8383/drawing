import React from "react"
import styled from 'styled-components'
import Image from 'next/image'

const ToolButton = (props) =>{
  return (
    <Button>
      <Image src={props.tool}></Image>
    </Button>
  )
}

const Button = styled.button`
  width: 50%;
  aspect-ratio: 1 / 1;
  border:solid;
  border-color:black;
`


export default ToolButton
