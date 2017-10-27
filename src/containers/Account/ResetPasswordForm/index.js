import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import ResetPasswordForm from 'components/forms/ResetPassword'

import {
  updateForm,
  updateFormError,
  resetForm,
  changePassword
} from 'actions/account/ResetPassword'

import { resetPasswordValidators } from 'utils/validation/ResetPassword'

class ResetPasswordFormContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return <ResetPasswordForm {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account
  } = state

  const {
    currentPassword,
    newPassword,
    confirmPassword,
    errors
  } = account.resetPassword

  let canProgress = true

  for (let key in errors) {
    let error = errors[key]
    if (error.length > 0) {
      canProgress = false
    }
  }

  return {
    values: {
      currentPassword,
      newPassword,
      confirmPassword
    },
    errors,
    canProgress,
    validators: resetPasswordValidators
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (name, value) => {
      dispatch(updateForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(updateFormError(errors, name))
    },
    submitForm: (values) => {
      let {currentPassword, newPassword} = values
      dispatch(changePassword({oldPassword: currentPassword, newPassword}))
    },
    clearForm: () => {
      dispatch(resetForm())
    },
    onCancel: () => {
      dispatch(resetForm())
      ownProps.onFormCancel && ownProps.onFormCancel()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordFormContainer)
