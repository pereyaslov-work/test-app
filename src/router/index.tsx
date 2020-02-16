import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'

const Auth = lazy(() => import('containers/Auth'))

const Router = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/auth" />

      <Route path='/auth' component={Auth} />

      {routes.map((route) => <Route key={route.name} {...route} />)}
    </Switch>
  )
}

export default Router

