import feedUpdatePopupReducer from './feedUpdatePopupReducer'

import submitFeedPost from 'reducers/submitfeedpost'

import reducerFactory from 'reducers/reducerFactory'

import { combineReducers } from 'redux'

const combinedFeedReducers = combineReducers({
  submitComment: reducerFactory(submitFeedPost, 'horseFeedComments'),
  feedInfo: feedUpdatePopupReducer
})

export default combinedFeedReducers
