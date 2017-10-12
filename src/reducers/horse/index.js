import horseReducer from './horseReducer'
import horseStatisticsResultsDetailsReducer from './horseStatisticsResultsDetailsReducer'
import horseStatisticsFutureDetailsReducer from './horseStatisticsFutureDetailsReducer'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  horseInfo: horseReducer,
  horseStatisticsResultsDetailsInfo: horseStatisticsResultsDetailsReducer,
  horseStatisticsFutureDetailsInfo: horseStatisticsFutureDetailsReducer
})

export default combinedHorseReducers
