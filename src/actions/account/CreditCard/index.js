export const FORM_UPDATE = '@CREDIT_CARD/FORM_UPDATE'

export const FORM_RESET = '@CREDIT_CARD/FORM_RESET'

export const FORM_SUBMITTING = '@CREDIT_CARD/FORM_SUBMITTING'

export const FORM_ERROR = '@CREDIT_CARD/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@CREDIT_CARD/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@CREDIT_CARD/FORM_SUBMITTED'

export const updateForm = (name, value) => ({
  type: FORM_UPDATE,
  name,
  value
})

export const resetForm = () => ({
  type: FORM_RESET
})

export const submitForm = () => ({
  type: FORM_SUBMITTING
})

export const submittedForm = () => ({
  type: FORM_SUBMITTED
})

export const failedToSubmitForm = (error) => ({
  type: FORM_SUBMITTING_FAILED,
  error
})

export const updateFormError = (errors, name) => ({
  type: FORM_ERROR,
  errors,
  name
})

export const submitFormData = data => {
  return (dispatch, getState) => {
    return dispatch(submitForm())
  }
}
