import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Home } from '../pages'
import * as ROUTES from './paths'

export const Routes = ({}) => {
  return <Switch>
    <Route exact path={ROUTES.HOME} component={() => <Home />} />
    <Redirect to={ROUTES.NOT_FOUND} />
  </Switch>
}