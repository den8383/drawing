import React from "react"
import styles from './PalettePanel.module.css'

const CanvasPanel = (props) =>{
  return (
      <div id={styles.panel}>
      <p id={styles.position}>{props.x},{props.y}</p>
      <canvas id={styles.canvas}></canvas>
      </div>
      )
}

export default CanvasPanel
