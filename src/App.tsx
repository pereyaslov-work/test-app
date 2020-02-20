import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Router from 'router'

import 'styles/theme.css'
import Reset from 'styles/reset'
import * as theme from 'styles/theme'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 15px;
  font-family: Roboto, sans-serif;
`

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <StyledApp>
        <Reset />
        <Suspense fallback={<span>Loading</span>}>
          <Router />
        </Suspense>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
