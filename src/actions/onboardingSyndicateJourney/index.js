import {
  getHorsesInfos,
  getHorsesState,
  registerInSyndicate
} from 'api/Services'

export const HORSE_NUMBERS = '@ONBOARDING_SYNDICATE_JOURNEY/HORSE_NUMBERS'
export const SELECTED_HORSE = '@SELECTED_HORSE/SELECTED_HORSE'
export const HORSE_NAME_EDITOR = '@HORSE_NAME_EDITOR/HORSE_NAME_EDITOR'
export const GET_SELECT_HORSE_CODE = '@GET_SELECT_HORSE_CODE/GET_SELECT_HORSE_CODE'
export const SET_DURATION_VALUE = '@SET_DURATION_VALUE/SET_DURATION_VALUE'
export const SET_OWNER_SHIP_TYPE_VALUE = '@SET_OWNER_SHIP_TYPE_VALUE/SET_OWNER_SHIP_TYPE_VALUE'
export const SET_TEAM_SIZE_VALUE = '@SET_TEAM_SIZE_VALUE/SET_TEAM_SIZE_VALUE'
export const GOT_HORSE_INFORMATION = '@GOT_HORSE_INFORMATION/GOT_HORSE_INFORMATION'
export const GOT_HORSE_CONDITION = '@GOT_HORSE_CONDITION/GOT_HORSE_CONDITION'
export const REGISTERED_IN_SYNDICATE = '@REGISTERED_IN_SYNDICATE/REGISTERED_IN_SYNDICATE'

export const horseNumbers = (value) => ({
  type: HORSE_NUMBERS,
  value
})

export const getSeletedHorse = (value) => ({
  type: SELECTED_HORSE,
  value
})

export const horseNameEditor = (value) => ({
  type: HORSE_NAME_EDITOR,
  value
})

export const getSelectHorseCode = (value) => ({
  type: GET_SELECT_HORSE_CODE,
  value
})

export const getDurationValue = (value) => ({
  type: SET_DURATION_VALUE,
  value
})

export const getOwnerShipTypeValue = (value) => ({
  type: SET_OWNER_SHIP_TYPE_VALUE,
  value
})

export const getTeamSizeValue = (value) => ({
  type: SET_TEAM_SIZE_VALUE,
  value
})

export const gotHorseInformation = (value) => ({
  type: GOT_HORSE_INFORMATION,
  value
})

export const gotHorseCondition = (value) => ({
  type: GOT_HORSE_CONDITION,
  value
})

export const RegisteredInSyndicate = (value) => ({
  type: REGISTERED_IN_SYNDICATE,
  value
})

export const getSelectedHorseNameEditor = (value, token) => {
  return (dispatch, getState) => {
    dispatch(horseNameEditor(value))

    return getHorsesInfos(value, token)
    .then((value) => {
      dispatch(gotHorseInformation(value))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export const getSelectHorseName = (value, token) => {
  return (dispatch, getState) => {
    dispatch(getSelectHorseCode(value))

    return getHorsesState(value, token)
    .then((value) => {
      dispatch(gotHorseCondition(value))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export const RegisterHorsesInSyndicate = (value, token) => {
  return (dispatch, getState) => {

    return registerInSyndicate(value, token)
    .then((value) => {
      dispatch(RegisteredInSyndicate(value))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
