import {
  FORM_UPDATE,
  FORM_RESET,
  FORM_SUBMITTING,
  FORM_ERROR,
  FORM_SUBMITTING_FAILED,
  FORM_SUBMITTED,
  GOT_CARDS
} from 'actions/account/CreditCard'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  cardName: '',
  errors: {
    cardName: []
  }
}

/**
*  @name reducer
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object }
*/
const reducer = (state = initialState, action) => {
  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case FORM_UPDATE:
      return update(state, {
        [action.name]: {
          $set: action.value
        }
      })

    case FORM_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case FORM_RESET:
      return initialState

    case FORM_SUBMITTING:
      return update(state, {
        isSubmitting: {
          $set: true
        },
        submitError: {
          $set: false
        }
      })

    case FORM_SUBMITTED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: false
        }
      })

    case FORM_SUBMITTING_FAILED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: true
        },
        errors: {
          $merge: action.error.errors || []
        }
      })

    case GOT_CARDS:
      return update(state, {
        cards: {
          $set: action.data
        }
      })

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
