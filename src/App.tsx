import React, { FunctionComponent, useLayoutEffect, useState } from 'react'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { darkThemeMatch, retrieveThemeSetting, saveThemeSetting } from './utils'
import { Theme } from './themes/types'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    background-color: ${({
      theme: {
        backgroundColors: { primary },
      },
    }) => primary};
    color: ${({
      theme: {
        textColors: { primary },
      },
    }) => primary};
  }
`

const StyledApp = styled.div``

const App: FunctionComponent = () => {
  const [theme, setTheme] = useState(retrieveThemeSetting())

  const switchTheme = (e: MediaQueryListEvent) =>
    setTheme(retrieveThemeSetting())

  useLayoutEffect(() => {
    darkThemeMatch.addListener(switchTheme)
    return () => darkThemeMatch.removeListener(switchTheme)
  }, [])

  console.log('theme set to: ', theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <StyledApp>
        <h1>Hello World!</h1>
      </StyledApp>
      <GlobalStyle />
      <button
        onClick={() => {
          saveThemeSetting('light')
          setTheme(retrieveThemeSetting())
        }}
      >
        Set light
      </button>
      <button
        onClick={() => {
          saveThemeSetting('dark')
          setTheme(retrieveThemeSetting())
        }}
      >
        Set dark
      </button>
      <button
        onClick={() => {
          saveThemeSetting('auto')
          setTheme(retrieveThemeSetting())
        }}
      >
        Set auto
      </button>
    </ThemeProvider>
  )
}

export default App
