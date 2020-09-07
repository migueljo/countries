import React from 'react'
import * as Styles from './LoaderStyles'
import Icon from '../Icon/index';

export default function Loader() {
  return (
    <Styles.LoaderContainer>
      <Icon name='loader' />
    </Styles.LoaderContainer>
  )
}
