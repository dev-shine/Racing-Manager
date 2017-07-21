import enhanceWithClickOutside from 'react-click-outside'

import LoginForm from 'components/forms/Login'

import { connect } from 'react-redux'

import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class LoginFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  handleClickOutside () {
    if (this.props.closeLogin) {
      this.props.closeLogin()
    }
  }

  render () {
    return (
      <LoginForm
        {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    values: {},
    errors: {},
    validators: () => []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm: (values) => {
      ownProps.closeLogin()
      ownProps.history.push('/dashboard')
    },
    update: () => {},
    updateErrors: () => {}
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhanceWithClickOutside(LoginFormContainer)))
