import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AuthRoute from 'components/routing/AuthRoute'

import { Switch } from 'react-router-dom'

import AccountSidePanel from 'components/account/AccountSidePanel'

import PersonalInformation from 'views/Account/PersonalInformation'

import ViewHeaderBar from 'components/common/ViewHeaderBar'

const AccountLayout = (props) => {
  const {
    name
  } = props

  return (
    <div className='account-layout'>
      <ViewHeaderBar
        title={`hello, ${name}`} />
      <div className='container account-layout__container'>
        <div className='col-lg-3 col-md-4 col-xs-12'>
          <AccountSidePanel />
        </div>
        <div className='col-lg-9 col-md-8 col-xs-12'>
          <Switch>
            <AuthRoute exact path='/account' component={PersonalInformation} redirectPath='/' />
          </Switch>
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
