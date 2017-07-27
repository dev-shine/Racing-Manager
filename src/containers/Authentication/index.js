import React, { Component } from 'react'

import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import { authenticateUserFromToken, logOut, performAuthentication } from 'actions/auth'

import { isJwtValid } from 'utils/validation/JwtValidation'

class Authentication extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const token = getItem(USER_TOKEN)

    if (token && isJwtValid(token)) {
      this.props.flagAuthenticationWillStart()
      this.props.authenticateUser(token)
      return true
    }

    this.props.logUserOut()
  }

  render () {
    const {
      isLoading
    } = this.props

    return !isLoading ? this.props.children : null
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    flagAuthenticationWillStart: () => {
      dispatch(performAuthentication())
    },
    authenticateUser: (token) => {
      dispatch(authenticateUserFromToken(token))
    },
    logUserOut: () => {
      dispatch(logOut())
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authentication))
