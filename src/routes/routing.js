import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Home, Contact, Future } from '../pages'
import * as ROUTES from './paths'

export const Routes = ({userData, updateUserData}) => {
  return <Switch>
    <Route exact path={ROUTES.HOME} component={() => <Home userData={userData} updateUserData={updateUserData} />} />
    <Route exact path={ROUTES.FUTURE} component={() => <Future userData={userData} updateUserData={updateUserData} />} />
    <Route exact path={ROUTES.FUTUREMORE} component={() => <Future userData={userData} updateUserData={updateUserData} />} />
    {/* <Route exact path={ROUTES.CONTACT} component={() => <Contact />} /> */}
    <Redirect to={ROUTES.NOT_FOUND} />
  </Switch>
}