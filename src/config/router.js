import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Routes,
} from 'react-router-dom'

import { CookiesProvider } from 'react-cookie'
// import PrivateRoute from 'components/common/PrivateRoute'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/common/ScrollTop'

import PageNotFound from 'views/PageNotFound'
import Home from 'views/home'
import Register from 'views/register'
import HorseOverview from 'views/horseoverview'

const router = (
  <Routes>
    <CookiesProvider>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/horse/:name' component={HorseOverview} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </CookiesProvider>
  </Routes>
)

export default router
