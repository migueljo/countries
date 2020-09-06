import React, { useState, useEffect, useCallback } from 'react'

import Icon from '../Icon';

import * as Styles from './SearchBoxStyles'

export default function SearchBox({ onChange, value: propValue = '' }) {
  const [value, setValue] = useState('')
  const [prevValue, setPrevValue] = useState('')

  const handleChange = useCallback((event) => {
    if (onChange) onChange(event)
    setValue(event.target.value)
  }, [onChange])

  useEffect(() => {
    if (propValue !== prevValue) {
      setPrevValue(propValue)
      if (propValue !== value) {
        setValue(propValue)
      }
    }
  }, [prevValue, propValue, value, onChange])

  return (
    <Styles.Container>
      <Styles.IconContainer>
        <Icon name='search' />
      </Styles.IconContainer>
      <Styles.Input placeholder='Search for a country...' onChange={handleChange} value={value} />
    </Styles.Container>
  )
}
