import {
  FORM_UPDATE,
  FORM_RESET,
  FORM_SUBMITTING,
  FORM_ERROR,
  FORM_SUBMITTING_FAILED,
  FORM_SUBMITTED,
  FORM_SUBMITDATA
} from 'actions/registerSyndicate/AddMemberForm'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  isSubmitting: false,
  submitError: false,
  membersData: {},
  errors: {
    firstName: [],
    surname: [],
    addressLine1: [],
    addressLine2: [],
    postcode: []
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
      return {...state,
        membersData: {...state.membersData, [action.key]: {...state.membersData[action.key], [action.name]: action.value}}
      }

    case FORM_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case FORM_RESET:
      let newMembersData = state.membersData
      delete newMembersData[action.key]
      return {
        ...state,
        membersData: newMembersData
      }

    case FORM_SUBMITDATA:
      return {
        ...state,
        isSubmitting: {
          $set: false
        },
        membersData: {...state.membersData, [action.key]: action.data}
      }

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

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
