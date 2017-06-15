import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Routes,
} from 'react-router-dom'

import { CookiesProvider } from 'react-cookie'
import PrivateRoute from 'components/common/PrivateRoute'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/common/ScrollTop'
import PageNotFound from 'views/PageNotFound'

import Home from 'views/home'
import Login from 'views/Login'
import Register from 'views/register'
import HorseOverview from 'views/horseoverview'
import Dashboard from 'views/Dashboard'
import PrivateSyndicate from 'views/PrivateSyndicate'

const router = (
  <Routes>
    <CookiesProvider>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/horse/:name' component={HorseOverview} />
            <Route path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/syndicate/:id' component={PrivateSyndicate} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </CookiesProvider>
  </Routes>
)

export default router
