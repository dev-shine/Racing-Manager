import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import RegisterExistingSyndicateForm from 'components/forms/RegisterExistingSyndicate'

import {
  updateForm,
  updateFormError,
  resetForm,
  submitFormData
} from 'actions/registerExistingSyndicate'

import { trim } from 'utils/stringutils'

import { registerExistingSyndicateValidators } from 'utils/validation/RegisterExistingSyndicate'

class RegisterExistingSyndicateFormContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return (
      <RegisterExistingSyndicateForm {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    registerExistingSyndicate
  } = state

  const {
    firstname,
    surname,
    email,
    syndicatename,
    address1,
    address2,
    city,
    confirm,
    errors
  } = registerExistingSyndicate

  return {
    values: {
      firstname,
      surname,
      email,
      syndicatename,
      address1,
      address2,
      city,
      confirm
    },
    errors,
    validators: registerExistingSyndicateValidators
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
      dispatch(submitFormData({
        firstname: values.firstname,
        surname: values.surname,
        email: trim(values.email),
        syndicatename: values.syndicatename,
        address1: values.address1,
        address2: values.address2,
        city: values.city
      }))
      .then((response) => {
        ownProps.history.push(`/user/verify/${response.token}`)
      })
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterExistingSyndicateFormContainer))
