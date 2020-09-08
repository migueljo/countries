import React, { createContext, useState, useCallback } from 'react'

export const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
  const cachedValue = !!JSON.parse(localStorage.getItem('darkMode'))
  const [darkMode, setDarkMode] = useState(cachedValue)
  const handleChange = useCallback((value) => {
    setDarkMode(value)
    localStorage.setItem('darkMode', value)
  }, [])

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode: handleChange}}>
      {children}
    </DarkModeContext.Provider>
  )
}
