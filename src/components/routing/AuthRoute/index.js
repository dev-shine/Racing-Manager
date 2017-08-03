import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class AuthRoute extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      component: Component,
      redirect: RedirectComponent,
      redirectPath,
      isLoggedIn,
      authenticatedPath,
      ...rest
    } = this.props

    return (
      <Route {...rest} render={props => {
        if (isLoggedIn) {
          return (
            authenticatedPath
            ? (
              <Redirect to={{
                pathname: authenticatedPath,
                state: {
                  from: props.location
                }
              }} />
            )
            : (
              <Component {...props} />
            )
          )
        } else {
          return (
            RedirectComponent ? (
              <RedirectComponent {...props} />
            ) : (
              <Redirect to={{
                pathname: redirectPath,
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

AuthRoute.propTypes = {
  component: instancePropTypes,
  redirect: instancePropTypes,
  redirectPath: PropTypes.string
}

AuthRoute.defaultProps = {
  redirectPath: '/'
}

const mapStateToProps = (state) => {
  const {
    auth
  } = state

  return {
    isLoggedIn: auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute)
