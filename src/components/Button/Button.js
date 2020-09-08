import React, { useContext } from 'react'

import * as Styles from './ButtonStyles'
import Icon from '../Icon'

import { DarkModeContext } from '../../providers/DarkMode';

export default function Button({ text, icon, onClick }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Styles.Button onClick={onClick} darkMode={darkMode}>
      {icon && <Icon name={icon} />}
      <p>
        {text}
      </p>
    </Styles.Button>
  )
}
