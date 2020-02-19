import React, { Suspense } from 'react'
import Router from 'router'
import styled from 'styled-components'

import 'styles/theme.css'
import Reset from 'styles/reset'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 15px;
  font-family: Roboto, sans-serif;
`

const App = () => {
  return (
    <StyledApp>
      <Reset />
      <Suspense fallback={<span>Loading</span>}>
        <Router />
      </Suspense>
    </StyledApp>
  )
}

export default App
