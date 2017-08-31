import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AuthRoute from 'components/routing/AuthRoute'

import { Switch } from 'react-router-dom'

import AccountSidePanel from 'components/account/AccountSidePanel'

import PersonalInformation from 'views/Account/PersonalInformation'

import ViewHeader from 'components/common/ViewHeader'

const AccountLayout = (props) => {
  const {
    name
  } = props

  return (
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
              <AuthRoute exact path='/account' component={PersonalInformation} redirectPath='/' />
            </Switch>
          </div>
        </div>
      </div>
    </div>
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
