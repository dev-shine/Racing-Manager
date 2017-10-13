import horseReducer from './horseReducer'
import horseStatisticsResultsReducer from './horseStatisticsResultsReducer'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  horseInfo: horseReducer,
  horseStatisticsResultsInfo: horseStatisticsResultsReducer
})

export default combinedHorseReducers
