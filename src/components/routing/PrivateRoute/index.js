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

    // FIXME: Temporary setting both to TRUE before integration with authentication endpoint
    this.state = {
      isLoaded: true,
      isAuthenticated: false,
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
    const { component: Component, redirect: RedirectComponent, ...rest } = this.props

    if (!isLoaded) return null

    return (
      <Route {...rest} render={props => {
        if (isAuthenticated) {
          return (
            <Component {...props} />
          )
        } else {
          return (
            RedirectComponent ? (
              <RedirectComponent {...props} />
            ) : (
              <Redirect to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }} />
            )
          )
        }
      }} />
    )
  }
}

const instancePropTypes = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.instanceOf(Component)
])

PrivateRoute.propTypes = {
  component: instancePropTypes,
  redirect: instancePropTypes,
  cookies: PropTypes.instanceOf(Cookies),
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
