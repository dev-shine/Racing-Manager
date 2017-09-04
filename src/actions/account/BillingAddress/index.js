export const FORM_UPDATE = '@BILLING_ADDRESS/FORM_UPDATE'

export const FORM_RESET = '@BILLING_ADDRESS/FORM_RESET'

export const FORM_SUBMITTING = '@BILLING_ADDRESS/FORM_SUBMITTING'

export const FORM_ERROR = '@BILLING_ADDRESS/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@BILLING_ADDRESS/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@BILLING_ADDRESS/FORM_SUBMITTED'

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
