import React from 'react'

import Icon from '../Icon';

import * as Styles from './SearchBoxStyles'

export default function SearchBox({ onChange }) {
  return (
    <Styles.Container>
      <Styles.IconContainer>
        <Icon name='search' />
      </Styles.IconContainer>
      <Styles.Input placeholder='Search for a country...' onChange={onChange} />
    </Styles.Container>
  )
}
