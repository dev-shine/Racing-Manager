export const FORM_UPDATE = '@CREDIT_CARD/FORM_UPDATE'

export const FORM_RESET = '@CREDIT_CARD/FORM_RESET'

export const FORM_SUBMITTING = '@CREDIT_CARD/FORM_SUBMITTING'

export const FORM_ERROR = '@CREDIT_CARD/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@CREDIT_CARD/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@CREDIT_CARD/FORM_SUBMITTED'

export const updateForm = (name, value, reducerName) => ({
  type: FORM_UPDATE,
  name,
  value,
  reducerName
})

export const resetForm = (reducerName) => ({
  type: FORM_RESET,
  reducerName
})

export const submitForm = (reducerName) => ({
  type: FORM_SUBMITTING,
  reducerName
})

export const submittedForm = (reducerName) => ({
  type: FORM_SUBMITTED,
  reducerName
})

export const failedToSubmitForm = (error, reducerName) => ({
  type: FORM_SUBMITTING_FAILED,
  error,
  reducerName
})

export const updateFormError = (errors, name, reducerName) => ({
  type: FORM_ERROR,
  errors,
  name,
  reducerName
})

export const submitFormData = (data, reducerName) => {
  return (dispatch, getState) => {
    return dispatch(submitForm())
  }
}
