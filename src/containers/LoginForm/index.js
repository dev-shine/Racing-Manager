import enhanceWithClickOutside from 'react-click-outside'

import LoginForm from 'components/forms/Login'

import { connect } from 'react-redux'

import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import {
  submitFormData,
  updateLoginForm,
  updateLoginFormError,
  toggleKeepLoggedInForm
} from 'actions/login'

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
    values: state.login,
    errors: state.login.errors,
    errorMessage: state.login.errorMessage,
    validators: () => {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (name, value) => {
      dispatch(updateLoginForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(updateLoginFormError(errors, name))
    },
    submitForm: (values) => {
      const {
        onSubmitSuccess,
        onSubmitFail
        } = ownProps

      dispatch(submitFormData({
        email: values.email,
        password: values.password
      }))
      .then(() => {
        ownProps.history.replace('/dashboard')
        return Promise.resolve()
      })
      .then(onSubmitSuccess)
      .catch(onSubmitFail)
    },
    toggleLoggedIn: () => {
      dispatch(toggleKeepLoggedInForm())
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhanceWithClickOutside(LoginFormContainer)))
