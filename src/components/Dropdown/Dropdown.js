import React, { useState, useCallback, useContext } from 'react'
import Select from 'react-select'
import getStyles from './DropdownStyles'
import { DarkModeContext } from '../../providers/DarkMode'

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export default function Dropdown(props) {
  const [value, setValue] = useState()
  const [prevValue, setPrevValue] = useState()
  const { darkMode } = useContext(DarkModeContext)
  const hangleChange = useCallback((option) => {
    if (props.onChange) props.onChange(option)
  }, [props])

  useCallback(() => {
    if (props.value !== prevValue) {
      setPrevValue(props.value)
      if (props.value !== value) {
        setValue(props.value)
      }
    }
  }, [prevValue, props.value, value])

  return (
    <Select
        value={value}
        onChange={hangleChange}
        options={options}
        isSearchable={false}
        placeholder='Filter by Region'
        styles={getStyles(darkMode)}
    />
  )
}
