import horseReducer from './horseReducer'
import horseStatisticsResultsDetailsReducer from './horseStatisticsResultsDetailsReducer'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  horseInfo: horseReducer,
  horseStatisticsResultsDetailsInfo: horseStatisticsResultsDetailsReducer
})

export default combinedHorseReducers
