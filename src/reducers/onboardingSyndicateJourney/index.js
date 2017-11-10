import {
  HORSE_NUMBERS,
  SELECTED_HORSE,
  HORSE_NAME_EDITOR,
  GET_SELECT_HORSE_CODE,
  SET_DURATION_VALUE,
  SET_OWNER_SHIP_TYPE_VALUE,
  SET_TEAM_SIZE_VALUE,
  GOT_HORSE_INFORMATION,
  GOT_HORSE_CONDITION,
  REGISTERED_IN_SYNDICATE
} from 'actions/onboardingSyndicateJourney'

import _ from 'lodash'

/**
 * @name initialState
 *  @type { object }
 *  @description - Initial state
 */
const initialState = {
  horseCount: 0,
  selectedHorse: null,
  currentValues: [],
  horses: [],
  selectedHorseName: '',
  horseName: [],
  horseCondition: '',
  registerResult: '',
  isSubmitting: false
}

const horseInfo = {
  horseCode: '',
  ownership: {
    type: ''
  },
  ownershipType: '',
  teamSize: null
}

/**
 *  @name reducer
 *  @type { function }
 *  @param { object } state
 *  @param { object } action
 *  @return { object }
 */
const reducer = (state = initialState, action) => {

  let newState = _.cloneDeep(state)
  let newHorseInfo = _.cloneDeep(horseInfo)
  /**
   *  @type { switch }
   *  @return { object }
   */
  switch (action.type) {
    case HORSE_NUMBERS:
      if (newState.horseCount < action.value) {
        newState.horseCount = action.value
        newState.horses && newState.horses.push(newHorseInfo)
        newState.currentValues && newState.currentValues.push('')

        return newState
      } else {
        newState.horseCount = action.value
        newState.horses  && newState.horses.pop()
        newState.currentValues && newState.currentValues.pop()

        return newState
      }

    case SELECTED_HORSE:
      newState.selectedHorse = action.value

      return newState

    case HORSE_NAME_EDITOR:
      newState.currentValues && (newState.currentValues[newState.selectedHorse && newState.selectedHorse - 1] = action.value)
      newState.isSubmitting = true

      return newState

    case GET_SELECT_HORSE_CODE:
      newState.currentValues && (newState.currentValues[newState.selectedHorse && newState.selectedHorse - 1] = action.value)
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].horseCode = action.value)

      return newState

    case SET_DURATION_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].ownership.type = action.value)

      return newState

    case SET_OWNER_SHIP_TYPE_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].ownershipType = action.value)

      return newState

    case SET_TEAM_SIZE_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].teamSize = action.value)

      return newState

    case GOT_HORSE_INFORMATION:
      newState.horseName =  action.value && action.value.map((item) => ({ horseName: item.horseName, horseCode: item.horseCode }))
      newState.isSubmitting = false

      return newState

    case GOT_HORSE_CONDITION:
      if (action.value === 'false') {
        newState.horseCondition = 'success'
      } else if (action.value === 'true') {
        newState.horseCondition = 'failed'
      }


      return newState

    case REGISTERED_IN_SYNDICATE:
      newState.registerResult = action.value

      return newState

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer