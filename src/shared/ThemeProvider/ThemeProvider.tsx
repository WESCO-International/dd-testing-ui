import { setup } from 'goober'
import React, { createContext, useContext, useState } from 'react'
import theme, { ThemeType } from '../theme'

const ThemeContext = createContext<ThemeType | null>(theme)

const useTheme = (): ThemeType | null => {
  const themeContext = useContext(ThemeContext)
  if (themeContext === null) {
    throw new Error('useTheme() can only be used inside of <ThemeProvider />, ' + 'please declare it at a higher level.')
  }
  return themeContext
}

setup(React.createElement, undefined, useTheme)

const ThemeProvider: React.FunctionComponent<{ extraTheme?: { [key: string]: string } }> = ({ children, extraTheme = {} }) => {
  const [themeValue] = useState<ThemeType>({ ...theme, ...extraTheme })
  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
}

export { useTheme }

export default ThemeProvider
