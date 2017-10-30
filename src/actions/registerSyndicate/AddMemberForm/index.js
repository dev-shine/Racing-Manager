export const FORM_UPDATE = '@MEMBER_FORM/FORM_UPDATE'

export const FORM_RESET = '@MEMBER_FORM/FORM_RESET'

export const FORM_SUBMITTING = '@MEMBER_FORM/FORM_SUBMITTING'

export const FORM_ERROR = '@MEMBER_FORM/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@MEMBER_FORM/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@MEMBER_FORM/FORM_SUBMITTED'

export const FORM_SUBMITDATA = '@MEMBER_FORM/FORM_SUBMITDATA'

export const updateForm = (dataKey, name, value) => ({
  type: FORM_UPDATE,
  key: dataKey,
  name,
  value
})

export const resetForm = (dataKey) => ({
  type: FORM_RESET,
  key: dataKey
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

export const submitFormData = (key, data) => ({
  type: FORM_SUBMITDATA,
  data: data,
  key: key
})
