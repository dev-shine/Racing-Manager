import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import {addCreditCard} from 'api/Services/'

import { addToastSuccess, addToastError } from 'actions/toast'

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
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [submitCard, submittedCard, failedToSubmitCard],
      endpoint: addCreditCard,
      payload: {
        tokenId: data.token.card.id
      }
    })
      .then((response) => {
        console.log(response)
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}
