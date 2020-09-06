import React from 'react'
import * as Styles from './ButtonStyles'
import Icon from '../Icon'

export default function Button({ text, icon }) {
  return (
    <Styles.Button>
      {icon && <Icon name={icon} />}
      <p>
        {text}
      </p>
    </Styles.Button>
  )
}
