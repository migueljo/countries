import React, { useContext, useCallback } from 'react'

import Icon from '../Icon'

import * as Styles from './HeaderStyles'
import { DarkModeContext } from '../../providers/DarkMode';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const handleModeClick = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])

  return (
    <Styles.Header darkMode={darkMode}>
      <Styles.Title>Where in the world?</Styles.Title>
      <Styles.Mode onClick={handleModeClick}>
        {
          darkMode ? (
            <>
              <Icon name='sun' />
              <span>Light mode</span>
            </>
          ) : (
            <>
              <Icon name='moon' />
              <span>Dark mode</span>
            </>
          )
        }
      </Styles.Mode>
    </Styles.Header>
  )
}
