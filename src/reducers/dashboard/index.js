import memberDashboard from './MemberDashboard'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  member: memberDashboard
})

export default reducers
