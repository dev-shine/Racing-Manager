import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import authenticate from 'actions/auth'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount () {
    // this.props.authenticate()
  }

  render () {
    const { isAuthenticated } = this.state
    const { component: Component, ...rest } = this.props

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

const mapStateToProps = (state, ownProps) => ({
  cookie: 'sample-cookie' // TODO: Integrate with storage.cookie
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticate: () => {
    return dispatch(authenticate(ownProps.cookie))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)
