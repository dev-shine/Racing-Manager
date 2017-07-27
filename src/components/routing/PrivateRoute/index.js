import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import authenticate from 'actions/auth'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      component: Component,
      redirect: RedirectComponent,
      redirectPath,
      isLoggedIn,
      ...rest
    } = this.props

    return (
      <Route {...rest} render={props => {
        if (isLoggedIn) {
          return (
            <Component {...props} />
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

PrivateRoute.propTypes = {
  component: instancePropTypes,
  redirect: instancePropTypes,
  redirectPath: PropTypes.string
}

PrivateRoute.defaultProps = {
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
  authenticate: (token) => {
    return dispatch(authenticate(token))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)
