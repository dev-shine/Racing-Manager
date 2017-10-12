import React from 'react'
import {
  Route,
  Switch,
  Router as Routes,
} from 'react-router-dom'

import history from 'utils/locationutils'

import AuthRoute from 'components/routing/AuthRoute'

import Startup from 'containers/Startup'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/routing/ScrollTop'
import PageNotFound from 'views/PageNotFound'

import Home from 'views/Home'
import Register from 'views/Registration/Register'
import RegistrationSuccessful from 'views/Registration/RegisterSuccessful'
import RegistrationConfirmation from 'views/Registration/RegisterConfirmation'
import MemberDashboard from 'views/Dashboard/MemberDashboard'
import ManagerDashboardBilling from 'views/ManagerDashboard/ManagerDashboardBilling'
import BrowseHorses from 'views/BrowseHorses'
import RegistrationExistingSyndicate from 'views/Registration/RegisterExistingSyndicate'

import Account from 'views/Account/AccountLayout'

import PrivateHorse from 'views/Horse/Private/HorseOverview'
import PrivateHorseStatistics from 'views/Horse/Private/HorseStatistics'
import PrivateHorseInformation from 'views/Horse/Private/HorseInformation'

import PublicHorse from 'views/Horse/Public/HorseOverview'

import Syndicate from 'views/Syndicate/SyndicateMain'
import PrivateSyndicate from 'views/Syndicate/Private/SyndicateOverview'
import PublicSyndicate from 'views/Syndicate/Public/SyndicateOverview'

const router = (
  <Routes history={history}>
    <Startup>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/register' authenticatedPath='/' redirect={Register} />
            <Route path='/registration-successful' component={RegistrationSuccessful} />
            <Route path='/browse-horses' component={BrowseHorses} />
            <AuthRoute path='/register-existing-syndicate' component={RegistrationExistingSyndicate} redirectPath='/' />
            <AuthRoute path='/dashboard' component={MemberDashboard} redirectPath='/' />
            <AuthRoute path='/manager-dashboard/billing' component={ManagerDashboardBilling} redirectPath='/' />

            <AuthRoute exact path='/horse/:slug' component={PrivateHorse} redirect={PublicHorse} />
            <AuthRoute exact path='/horse/:slug/statistics' component={PrivateHorseStatistics} redirectPath='/404' />
            <AuthRoute exact path='/horse/:slug/information' component={PrivateHorseInformation} redirectPath='/404' />
            <AuthRoute exact path='/horse/:slug/information/edit' component={PrivateHorseInformation} redirectPath='/404' />

            <AuthRoute path='/account' component={Account} redirectPath='/' />

            <AuthRoute exact path='/syndicate' component={PrivateSyndicate} redirectPath='/' />
            <AuthRoute exact path='/syndicate/:slug' component={PrivateSyndicate} redirect={PrivateSyndicate} />
            <AuthRoute exact path='/syndicate/:slug/edit' component={PrivateSyndicate} redirectPath='/404' />

            <Route path='/user/verify/:token' component={RegistrationConfirmation} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </Startup>
  </Routes>
)

export default router
