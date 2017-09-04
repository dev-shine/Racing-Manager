import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AuthRoute from 'components/routing/AuthRoute'

import { Switch, Redirect } from 'react-router-dom'

import AccountSidePanel from 'components/account/AccountSidePanel'

import AccountPersonalInformation from 'views/Account/AccountPersonalInformation'

import AccountContactDetails from 'views/Account/AccountContactDetails'

import AccountSecuritySettings from 'views/Account/AccountSecuritySettings'

import AccountPaymentMethods from 'views/Account/AccountPaymentMethods'

import ViewHeader from 'components/common/ViewHeader'

import View from 'components/routing/View'

import { ACCOUNT as title } from 'data/titles'

const AccountLayout = (props) => {
  const {
    name
  } = props

  return (
    <View title={title}>
      <div className='account-layout'>
        <ViewHeader
          title={`hello, ${name}`} />
        <div className='container account-layout__container'>
          <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
            <AccountSidePanel />
          </div>
          <div className='col-lg-9 col-md-8 col-sm-8 col-xs-12'>
            <div className='account-layout__content'>
              <Switch>
                <AuthRoute exact path='/account' component={AccountPersonalInformation} redirectPath='/' />
                <AuthRoute exact path='/account/contact' component={AccountContactDetails} redirectPath='/' />
                <AuthRoute exact path='/account/security' component={AccountSecuritySettings} redirectPath='/' />
                <AuthRoute exact path='/account/payment' component={AccountPaymentMethods} redirectPath='/' />
                <Redirect to='/404' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </View>
  )
}

AccountLayout.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  const {
    auth
  } = state

  const {
    details
  } = auth

  return {
    name: details.firstname
  }
}

export default connect(
  mapStateToProps,
  null
)(AccountLayout)
