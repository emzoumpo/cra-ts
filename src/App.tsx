import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const StyledApp = styled.div`
  background-color: red;
`

const App = () => (
  <>
    <StyledApp>
      <h1>Hello World!</h1>
    </StyledApp>
    <GlobalStyle />
  </>
)

export default App
