import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Home, Contact, Future } from '../pages'
import * as ROUTES from './paths'

export const Routes = () => {
  return <Switch>
    <Route exact path={ROUTES.HOME} component={() => <Home />} />
    <Route exact path={ROUTES.FUTURE} component={() => <Future />} />
    <Route exact path={ROUTES.FUTUREMORE} component={() => <Future />} />
    {/* <Route exact path={ROUTES.CONTACT} component={() => <Contact />} /> */}
    <Redirect to={ROUTES.NOT_FOUND} />
  </Switch>
}