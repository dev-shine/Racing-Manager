import { connect } from 'react-redux'

import PersonalInformationForm from 'components/forms/PersonalInformation'

const mapStateToProps = (state, ownProps) => {
  return {
    values: {},
    errors: {},
    validators: () => { return [] },
    canProgress: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: () => {
    },
    updateErrors: () => {
    },
    submitForm: (values) => {
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformationForm)
