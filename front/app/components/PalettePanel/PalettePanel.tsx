import React from 'react'
import styles from './PalettePanel.module.css'
import ColorButton from './ColorButton/ColorButton'

const PalettePanel = () =>{
  return (
      <div id={styles.panel}>
      <ColorButton color='red'></ColorButton>
      </div>
      )
}

export default PalettePanel
