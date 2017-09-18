import React, { Component } from 'react'

import { connect } from 'react-redux'

import PersonalInformationForm from 'components/forms/PersonalInformation'

import {
  updateForm,
  updateFormError,
  resetForm
} from 'actions/account/PersonalInformation'

import { personalInformationValidators } from 'utils/validation/PersonalInformation'

class PersonalInformationFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return <PersonalInformationForm {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account
  } = state

  const {
    firstname,
    surname,
    username,
    birthday,
    location,
    errors
  } = account.personalInformation

  return {
    values: {
      firstname: firstname,
      surname: surname,
      username,
      birthday,
      location
    },
    errors,
    validators: personalInformationValidators
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
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformationFormContainer)
