import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Home, Contact, Future } from '../pages'
import * as ROUTES from './paths'

export const Routes = (props) => {
  return <Switch>
    <Route exact path={ROUTES.HOME} component={() => <Home {...props} />} />
    <Route exact path={ROUTES.FUTURE} component={() => <Future {...props} />} />
    <Route exact path={ROUTES.FUTUREMORE} component={() => <Future {...props} />} />
    {/* <Route exact path={ROUTES.CONTACT} component={() => <Contact />} /> */}
    <Redirect to={ROUTES.NOT_FOUND} />
  </Switch>
}