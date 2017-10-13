import horseReducer from './horseReducer'
import horseStatisticsResultsReducer from './horseStatisticsResultsReducer'
import horseStatisticsResultsDetailsReducer from './horseStatisticsResultsDetailsReducer'
import horseStatisticsFutureDetailsReducer from './horseStatisticsFutureDetailsReducer'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  horseInfo: horseReducer,
  horseStatisticsResultsInfo: horseStatisticsResultsReducer,
  horseStatisticsResultsDetailsInfo: horseStatisticsResultsDetailsReducer,
  horseStatisticsFutureDetailsInfo: horseStatisticsFutureDetailsReducer
})

export default combinedHorseReducers
