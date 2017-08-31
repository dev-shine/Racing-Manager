import React from 'react'

import AuthRoute from 'components/routing/AuthRoute'

import { Switch } from 'react-router-dom'

import AccountSidePanel from 'components/account/AccountSidePanel'

import PersonalInformation from 'views/Account/PersonalInformation'

const AccountLayout = (props) => {
  return (
    <div className='container'>
      <div className='col-lg-3 col-md-4 col-xs-12'>
        <AccountSidePanel />
      </div>
      <div className='col-lg-9 col-md-8 col-xs-12'>
        <Switch>
          <AuthRoute exact path='/account' component={PersonalInformation} redirectPath='/' />
        </Switch>
      </div>
    </div>
  )
}

export default AccountLayout
