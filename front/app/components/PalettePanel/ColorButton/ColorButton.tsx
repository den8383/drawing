import React from "react"
import styles from './ColorButton.module.css'

const ColorButton = (props) =>{
  return (
      <div>
      <button className={styles.red}>{props.color}</button>
      </div>
      )
}

export default ColorButton
