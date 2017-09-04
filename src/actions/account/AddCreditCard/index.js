export const FORM_SUBMITTING = '@ADD_CREDIT_CARD/FORM_SUBMITTING'
export const FORM_SUBMITTED = '@ADD_CREDIT_CARD/FORM_SUBMITTED'
export const FORM_SUBMITTING_FAILED = '@ADD_CREDIT_CARD/FORM_SUBMITTING_FAILED'

export const submitCard = () => ({
  type: FORM_SUBMITTING
})

export const submittedCard = () => ({
  type: FORM_SUBMITTED
})

export const failedToSubmitCard = (error) => ({
  type: FORM_SUBMITTING_FAILED,
  error
})

export const submitCardToServer = data => {
  return (dispatch, getState) => {
    return dispatch(submitCard())
  }
}
