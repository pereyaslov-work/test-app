import React, { lazy } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import { StyledAuth, LeftSide, RightSide, Form } from './styles'

const SignIn = lazy(() => import('./SignIn'))
const SignUp = lazy(() => import('./SignUp'))

const Auth = () => {
  const { path } = useRouteMatch()

  return (
    <StyledAuth>
      <LeftSide>Left</LeftSide>

      <RightSide>
        <Form>
          <Switch>
            <Redirect exact from={path} to={`${path}/signin`} />
            <Route path={`${path}/signin`} component={SignIn} />
            <Route path={`${path}/signup`} component={SignUp} />
          </Switch>
        </Form>
      </RightSide>
    </StyledAuth>
  )
}

export default Auth
