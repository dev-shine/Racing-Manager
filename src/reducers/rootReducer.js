import { combineReducers } from 'redux'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'
import browseHorses from './browsehorses'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate,
  browseHorses
})

export default rootReducer
