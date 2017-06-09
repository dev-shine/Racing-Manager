import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { withCookies, Cookies } from 'react-cookie'

import authenticate from 'actions/auth'

const COOKIE_NAME = 'trm_auth'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isLoaded: false
    }
  }

  componentWillMount () {
    const { cookies } = this.props
    const token = cookies.get(COOKIE_NAME)

    if (token) {
      /*
      this.props.authenticate(token)
        .then(() => {
        })
        .catch(() => {
        })
       */
    }
  }

  render () {
    const { isAuthenticated, isLoaded } = this.state
    const { component: Component, ...rest } = this.props

    if (!isLoaded) return null

    return (
      <Route {...rest} render={props => {
        if (isAuthenticated) {
          return (
            <Component {...props} />
          )
        } else {
          return (
            <Redirect to={{
              pathname: '/login',
              state: {
                from: props.location
              }
            }} />
          )
        }
      }} />
    )
  }
}

PrivateRoute.propTypes = {
  cookies: PropTypes.instanceOf(Cookies)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticate: (token) => {
    return dispatch(authenticate(token))
  }
})

export default withCookies(
  connect(
    null,
    mapDispatchToProps
  )(PrivateRoute)
)
