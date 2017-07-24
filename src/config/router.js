import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Routes,
} from 'react-router-dom'

import { CookiesProvider } from 'react-cookie'
import PrivateRoute from 'components/routing/PrivateRoute'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/routing/ScrollTop'
import PageNotFound from 'views/PageNotFound'

import Home from 'views/home'
import Register from 'views/register'
import RegistrationSuccessful from 'views/RegistrationSuccessful'
import MemberDashboard from 'views/Dashboard/MemberDashboard'
import BrowseHorses from 'views/BrowseHorses'
import PrivateHorse from 'views/horse/PrivateHorse'
import PublicHorse from 'views/horse/PublicHorse'

import PrivateSyndicate from 'views/syndicate/PrivateSyndicate'
import PublicSyndicate from 'views/syndicate/PublicSyndicate'

const router = (
  <Routes>
    <CookiesProvider>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/registration-successful' component={RegistrationSuccessful} />
            <Route path='/browse-horses' component={BrowseHorses} />
            <PrivateRoute path='/dashboard' component={MemberDashboard} redirect={Home} />
            <Route path='/horse/:name' component={PublicHorse} />
            <Route path='/private-horse/:name' component={PrivateHorse} />
            <PrivateRoute path='/syndicate/:name' component={PrivateSyndicate} redirect={PublicSyndicate} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </CookiesProvider>
  </Routes>
)

export default router

/*
<Route path='/horse/:name' component={PrivateHorse} redirect={PublicHorse} />
*/
