export const HORSE_NUMBERS = '@ONBOARDING_SYNDICATE_JOURNEY/HORSE_NUMBERS'
export const SELECTED_HORSE = '@SELECTED_HORSE/SELECTED_HORSE'
export const SELECT_HORSE_NAME_EDITOR = '@SELECT_HORSE_NAME_EDITOR/SELECT_HORSE_NAME_EDITOR'
export const SELECT_HORSE_NAME = '@SELECT_HORSE_NAME/SELECT_HORSE_NAME'
export const SELECT_DURATION_VALUE = '@SELECT_DURATION_VALUE/SELECT_DURATION_VALUE'
export const SELECT_OWNER_SHIP_TYPE_VALUE = '@SELECT_OWNER_SHIP_TYPE_VALUE/SELECT_OWNER_SHIP_TYPE_VALUE'
export const SELECT_TEAM_SIZE_VALUE = '@SELECT_TEAM_SIZE_VALUE/SELECT_TEAM_SIZE_VALUE'

export const horseNumbers = (value) => ({
  type: HORSE_NUMBERS,
  value
})

export const getSeletedHorse = (value) => ({
  type: SELECTED_HORSE,
  value
})

export const getSelectedHorseNameEditor = (value) => ({
  type: SELECT_HORSE_NAME_EDITOR,
  value
})

export const getSelectHorseName = (value) => ({
  type: SELECT_HORSE_NAME,
  value
})

export const getDurationValue = (value) => ({
  type: SELECT_DURATION_VALUE,
  value
})

export const getOwnerShipTypeValue = (value) => ({
  type: SELECT_OWNER_SHIP_TYPE_VALUE,
  value
})

export const getTeamSizeValue = (value) => ({
  type: SELECT_TEAM_SIZE_VALUE,
  value
})
