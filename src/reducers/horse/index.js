import horseReducer from './horseReducer'

import submitFeedPost from 'reducers/submitfeedpost'

import reducerFactory from 'reducers/reducerFactory'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  submitFeedData: reducerFactory(submitFeedPost, 'horseFeedData'),
  horseInfo: horseReducer
})

export default combinedHorseReducers
