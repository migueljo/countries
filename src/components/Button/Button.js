import React from 'react'
import * as Styles from './ButtonStyles'
import Icon from '../Icon'

export default function Button({ text, icon, onClick }) {
  return (
    <Styles.Button onClick={onClick}>
      {icon && <Icon name={icon} />}
      <p>
        {text}
      </p>
    </Styles.Button>
  )
}
