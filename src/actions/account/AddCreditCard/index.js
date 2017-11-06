import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import {addCreditCard} from 'api/Services/'

import { addToastSuccess, addToastError } from 'actions/toast'

export const CARD_SUBMITTING = '@ADD_CREDIT_CARD/CARD_SUBMITTING'
export const CARD_SUBMITTED = '@ADD_CREDIT_CARD/CARD_SUBMITTED'
export const CARD_SUBMITTING_FAILED = '@ADD_CREDIT_CARD/CARD_SUBMITTING_FAILED'

export const submitCard = () => ({
  type: CARD_SUBMITTING
})

export const submittedCard = () => ({
  type: CARD_SUBMITTED
})

export const failedToSubmitCard = (error) => ({
  type: CARD_SUBMITTING_FAILED,
  error
})

export const submitCardToServer = data => {
  return {
    type: AUTHENTICATED_REQUEST,
    types: [submitCard, submittedCard, failedToSubmitCard],
    endpoint: addCreditCard,
    payload: JSON.stringify({
      tokenId: data.token.id
    })
  }
}
