import {
  HORSE_NUMBERS,
  SELECTED_HORSE,
  SELECT_HORSE_NAME_EDITOR,
  SELECT_HORSE_NAME,
  SELECT_DURATION_VALUE,
  SELECT_OWNER_SHIP_TYPE_VALUE,
  SELECT_TEAM_SIZE_VALUE
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
  selectedHorseName: ''
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
        return {
          horseCount: action.value,
          horses: [
            ...newState.horses,
            newHorseInfo
          ],
          currentValues: [
            ...newState.currentValues,
            ''
          ]
        }
      } else {
        let newHorseInfos = newState.horses
        newHorseInfos.pop()
        let currentValues = newState.currentValues
        currentValues.pop()
        return {
          horseCount: action.value,
          horses: newHorseInfos,
          currentValues: currentValues
        }
      }

    case SELECTED_HORSE:
      return {
        ...newState,
        selectedHorse: action.value
      }

    case SELECT_HORSE_NAME_EDITOR:
      let temp1 = newState.currentValues
      temp1[newState.selectedHorse - 1] = action.value
      return {
        ...newState,
        currentValues: temp1
      }

    case SELECT_HORSE_NAME:
      let temp5 = newState.currentValues
      temp5[newState.selectedHorse - 1] = action.value
      return {
        ...newState,
        currentValues: temp5
      }

    case SELECT_DURATION_VALUE:
      let temp2 = newState.horses
      temp2[newState.selectedHorse - 1].ownership.type = action.value
      return {
        ...newState,
        horses: temp2
      }

    case SELECT_OWNER_SHIP_TYPE_VALUE:
      let temp3 = newState.horses
      temp3[newState.selectedHorse - 1].ownershipType = action.value
      return {
        ...newState,
        horses: temp3
      }

    case SELECT_TEAM_SIZE_VALUE:
      let temp4 = newState.horses
      temp4[newState.selectedHorse - 1].teamSize = action.value
      return {
        ...newState,
        horses: temp4
      }

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer